from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import os
from dotenv import load_dotenv


def aes_encrypt(message, key):
    aes_key = bytes.fromhex(key)
    cipher = AES.new(aes_key, AES.MODE_CBC)
    ciphertext = cipher.encrypt(pad(message.encode(), AES.block_size))
    return cipher.iv + ciphertext

def aes_decrypt(ciphertext, key):
    aes_key = bytes.fromhex(key)
    ciphertext = bytes.fromhex(ciphertext)
    iv = ciphertext[:AES.block_size]
    cipher = AES.new(aes_key, AES.MODE_CBC, iv=iv)
    plaintext = unpad(cipher.decrypt(ciphertext[AES.block_size:]), AES.block_size)
    return plaintext.decode()