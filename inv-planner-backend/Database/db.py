from pymongo import MongoClient
def get_database(uri,dbname):
    db = MongoClient(uri)
    return db[dbname]