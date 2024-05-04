# Core imports
from flask import Flask, jsonify,request,send_file
from flask_cors import CORS
from dotenv import load_dotenv
import os


# Helper Programs
from Helpers.gemini import get_detailed_plan
from Helpers.pdf_generator import text_to_pdf
from Helpers.tokens import get_token,decode_token

# Database
from Database.db import get_database
from Database.db import store_data

load_dotenv()


app = Flask(__name__)
CORS(app)


@app.route('/auth/login',methods = ['POST'])
def login():
    print("Server contacted")
    collection = db["user-info"]
    user_info = request.get_json()
    print(user_info)
    result = collection.find_one(user_info)
    if (result):
        payload = {"id":str(result["_id"])}
        token = get_token(payload)
        # print("Token: ",token.)
        token = token.hex()
        print("token:",token)
        return {"invest_iq_login_token":token}
    else:
        error_message = "User not found"
        return jsonify({"error": error_message}), 404

@app.route("/auth/signup",methods=["POST"])
def signup():
    collection = db["user-info"]
    user_info = request.get_json()
    res =  collection.find_one({'email':user_info["email"]})
    if (collection.find_one({"email":user_info["email"]}) != None):
        error_message = "User already exist"
        return jsonify({"error": error_message}), 430
    res = collection.insert_one(user_info)
    payload = {"id" : str(res.inserted_id)}
    token = get_token(payload=payload)
    return {"invest_iq_signup_token":token}


@app.route("/api/v1/plan",methods=["POST"])
def get_plan():
    data = request.get_json()
    store_data(data)
    age = int(data["age"])
    current_salary = int(data["currSalary"])  # Ensure conversion to int
    saving_capacity = (int(data["saving"]) / 100)
    goal_amount = int(data["goalAmt"])
    goal_description = data["goalDesc"]
    goal_time_limit = int(data["goalAge"])

    # Ensure that current_salary and saving_capacity are integers before subtraction
    monthly_spending = current_salary - int(current_salary * saving_capacity)

    query = f"I am a {age}-year-old individual. I am currently working with a monthly salary of rupees {current_salary}. My risk-taking appetite is {saving_capacity} (on a scale of 0 to 1). I spend around {monthly_spending}/month out of my salary on myself and my family. My goal is to {goal_description.lower()} priced at {goal_amount} at the age of {goal_time_limit+age}. Do a detailed study and come up with a suitable investment plan."

    plan = get_detailed_plan(query)

    # converting the plan to pdf
    collection = db["user-info"]
    acc_token = data["token"]
    user_id = decode_token(acc_token)
    output_filename = "/Users/tanmay/Documents/InvestIQ/inv-backend.pdf"
    text_to_pdf(plan,output_filename)

    # sending the pdf file
    return send_file(output_filename,as_attachment=True)


if  __name__ == "__main__":
    uri = os.getenv("MONGO_URI")
    db = get_database(uri,"users")
    print("Connected to MongoDB")
    app.run()


