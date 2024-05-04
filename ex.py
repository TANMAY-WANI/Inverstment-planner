import secrets

def generate_aes_key():
    # Generate a random key of length 256 bytes
    key = secrets.token_bytes(32)
    return key

# Example usage:
aes_key = generate_aes_key()
print("Random AES Key (Hexadecimal):", aes_key.hex())
print(len(aes_key.hex()))