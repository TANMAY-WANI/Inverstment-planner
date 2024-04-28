import pathlib
import textwrap
import google.generativeai as genai
from IPython.display import display, Markdown
from dotenv import load_dotenv
import os

load_dotenv()

def get_detailed_plan(query):
    GOOGLE_API_KEY = os.getenv("GOOGLE_URI")
    genai.configure(api_key=GOOGLE_API_KEY)

    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(query) 

    return response.text
