# Core imports
from flask import Flask, jsonify,request
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Helper Programs
from Helpers.gemini import get_detailed_plan
from Helpers.pdf_generator import text_to_pdf
from Database.db import get_database
from Helpers.tokens import get_token


load_dotenv()


app = Flask(__name__)
CORS(app)


@app.route('/auth/login',methods = ['POST'])
def login():
    collection = db["user-info"]
    user_info = request.get_json()
    result = collection.find_one(user_info)
    if (result):
        print("User successfully logged in")
        payload = {"id":str(result["_id"])}
        token = get_token(payload)
        return {"invest_iq_login_token":token}
    else:
        error_message = "User not found"
        return jsonify({"error": error_message}), 404

@app.route("/auth/signup",methods=["POST"])
def signup():
    collection = db["user-info"]
    user_info = request.get_json()
    if (collection.find({"email":user_info["email"]})):
        print("User already exist, try logging in")
        error_message = "User already exist"
        return jsonify({"error": error_message}), 430
    res = collection.insert_one(user_info)
    # id = res.inserted_id
    payload = {"id" : res.inserted_id}
    token = get_token(payload=payload)
    return {"invest_iq_signup_token":token}


if  __name__ == "__main__":
    uri = os.getenv("MONGO_URI")
    db = get_database(uri,"users")
    print("Connected to MongoDB")
    app.run(host='localhost',port='5010')


