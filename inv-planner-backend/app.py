from flask import Flask, jsonify,request
from flask_cors import CORS
from gemini import get_detailed_plan
from pdf_generator import text_to_pdf
from Database.db import get_database


app = Flask(__name__)
CORS(app)


@app.route('/auth/login',methods = ['POST'])
def login():
    collection = db["user-info"]
    user_info = request.get_json()
    result = collection.find_one(user_info)
    if (result):
        print(result)
    return {"id":"1"}

@app.route("/auth/signup",methods=["POST"])
def signup():
    collection = db["user-info"]
    user_info = request.get_json()

    if (collection.find({"email":user_info["email"]})):
        responce = {"status":430,"data":"User already exist"}
        return responce 
    res = collection.insert_one(user_info)
    id = res.inserted_id
    return {"id":"1"}


if  __name__ == "__main__":
    uri = "mongodb+srv://tanmaywani145:u3Vvz7eqnFEPvXEU@cluster01.hcklk0h.mongodb.net/invest-iq-users?retryWrites=true&w=majority"
    db = get_database(uri,"users")
    print("Connected to MongoDB")
    app.run(host='localhost',port='5010')


