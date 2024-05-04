import secrets
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def generate_aes_key():
    # Generate a random key of length 256 bits (32 bytes)
    key = secrets.token_bytes(32)
    return key

# Generate AES key
aes_key = generate_aes_key()

# Write AES key to .env file
with open('.env', 'a') as env_file:
    env_file.write(f'SECRET_KEY={aes_key.hex()}\n')

print("AES key has been saved to .env file.")
