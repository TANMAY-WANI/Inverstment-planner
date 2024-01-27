# Investment Planner Web Application

## Overview

This repository contains the source code for an Investment Planner Web Application. The application helps users plan their investments based on their salary and financial goals. It leverages React.js for the frontend and Flask (Python) for the backend, integrating with MongoDB for data storage and Google's Gemini API for investment recommendations.

## Features

- **User Authentication:** Users can sign up, log in, and securely access their investment plans.
- **Salary Input:** Users can input their salary information to get personalized investment recommendations.
- **Goal Setting:** Users can set and manage their financial goals, such as buying a house, saving for education, or retirement planning.
- **Investment Suggestions:** The application utilizes Google's Gemini API to provide tailored investment plans based on user input.

## Tech Stack

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** For client-side routing within the React application.
- **Redux:** State management for predictable state changes.
- **Axios:** Used for making HTTP requests to the backend.

### Backend

- **Flask:** A lightweight web application framework in Python.
- **Flask-RESTful:** An extension for quickly building REST APIs with Flask.
- **JWT (JSON Web Tokens):** Used for secure authentication.
- **MongoDB:** A NoSQL database for scalable and flexible data storage.

### API Integration

- **Google's Gemini API:** Integrated to fetch investment recommendations based on user input.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/investment-planner.git
   ```

2. **Install Dependencies:**
   - Frontend: Navigate to the `frontend` directory and run:
     ```bash
     npm install
     ```
   - Backend: Navigate to the `backend` directory and create a virtual environment:
     ```bash
     python -m venv venv
     ```
     Activate the virtual environment and install dependencies:
     ```bash
     source venv/bin/activate  # On Windows: .\venv\Scripts\activate
     pip install -r requirements.txt
     ```

3. **Configuration:**
   - Set up your Google's Gemini API credentials and update them in the appropriate configuration files.
   - Configure MongoDB connection parameters in the backend.

4. **Run the Application:**
   - Frontend: In the `frontend` directory, run:
     ```bash
     npm start
     ```
   - Backend: In the `backend` directory, run:
     ```bash
     python app.py
     ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to use the Investment Planner Web Application.

## Contribution Guidelines

We welcome contributions to enhance the features, fix bugs, and improve the overall code quality. Please follow the standard contribution guidelines, including creating feature branches, writing clear commit messages, and submitting pull requests.