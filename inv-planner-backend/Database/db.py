from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()



def get_database(uri,dbname):
    db = MongoClient(uri)
    return db[dbname]

def store_data(data):
    uri = os.getenv("MONGO_URI")
    db = get_database(uri,"users")
    collection = db['usr_fin_data']
    collection.insert_one(data)