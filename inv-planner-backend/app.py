
import pathlib
import textwrap

import google.generativeai as genai

# Used to securely store your API key
# from google.colab import userdata


from IPython.display import display
from IPython.display import Markdown


def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

GOOGLE_API_KEY="AIzaSyCORNBtYES7zWRjYCQoqNzPSJJVQaAfpGM"

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("I am a 25 year old computer engineering undergraduate. I am currently working in a software company with a pay scale of rupees 1 lakh a month. my risk taking appetite is 0.7 (on scale of 0 to 1). I spend around 60,000 out of my salary every month on myself and my family. My goal is to buy this house priced at 16 crores at the age of 40. Do a detailed study and come up with suitable investment plan")

print(response.text)