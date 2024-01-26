# Core imports
from flask import Flask, jsonify,request
from flask_cors import CORS
from dotenv import load_dotenv
import os
import logging

# Helper Programs
from Helpers.gemini import get_detailed_plan
from Helpers.pdf_generator import text_to_pdf
from Helpers.tokens import get_token

# Database
from Database.db import get_database

load_dotenv()


app = Flask(__name__)
CORS(app)


@app.route('/auth/login',methods = ['POST'])
def login():
    collection = db["user-info"]
    user_info = request.get_json()
    result = collection.find_one(user_info)
    if (result):
        # print("User successfully logged in")
        logging.info("User "+user_info['email']+" logged in successfully")
        payload = {"id":str(result["_id"])}
        token = get_token(payload)
        return {"invest_iq_login_token":token}
    else:
        error_message = "User not found"
        logging.error(error_message)
        return jsonify({"error": error_message}), 404

@app.route("/auth/signup",methods=["POST"])
def signup():
    collection = db["user-info"]
    user_info = request.get_json()
    res =  collection.find_one({'email':user_info["email"]})
    print(res)
    if (collection.find_one({"email":user_info["email"]}) != None):
        logging.warning("User "+user_info['email']+" tried re-signup")
        error_message = "User already exist"
        return jsonify({"error": error_message}), 430
    res = collection.insert_one(user_info)
    payload = {"id" : str(res.inserted_id)}
    token = get_token(payload=payload)
    logging.info("Successfully signed up the user: "+user_info['email'])
    return {"invest_iq_signup_token":token}


if  __name__ == "__main__":
    logging.basicConfig(filename='backend_logs.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    uri = os.getenv("MONGO_URI")
    db = get_database(uri,"users")
    print("Connected to MongoDB")
    app.run(host='localhost',port=5010,debug=True)


