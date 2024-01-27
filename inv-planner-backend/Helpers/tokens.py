import jwt
import datetime
import os

def get_token(payload):
    return jwt.encode(payload,os.getenv("SECRET_KEY"),algorithm="HS256")

def decode_token(token):
    return jwt.decode(token,os.getenv("SECRET_KEY"),algorithms="HS256")