import pathlib
import textwrap
import google.generativeai as genai
from IPython.display import display, Markdown

def get_detailed_plan(query):
    GOOGLE_API_KEY = "AIzaSyCORNBtYES7zWRjYCQoqNzPSJJVQaAfpGM"
    genai.configure(api_key=GOOGLE_API_KEY)

    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(query)

    return response.text
