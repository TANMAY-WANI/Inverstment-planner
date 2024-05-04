import os
from .AES import aes_encrypt,aes_decrypt

def get_token(payload):
    key =  os.getenv("SECRET_KEY")
    return aes_encrypt(key=key,message=payload['id'])
    

def decode_token(token):
    key = os.getenv("SECRET_KEY")
    return aes_decrypt(ciphertext=token,key=key)

