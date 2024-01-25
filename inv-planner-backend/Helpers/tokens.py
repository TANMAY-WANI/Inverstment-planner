import jwt
import datetime
import os

def get_token(payload):
    payload["exp"] = datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    return jwt.encode(payload,os.getenv("SECRET_KEY"),algorithm="HS256")