from flask import Flask, request, jsonify
from flask_cors import CORS
from gemini import get_detailed_plan
from pdf_generator import text_to_pdf

