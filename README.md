# Programming Quiz App

A simple web-based quiz application built with **Angular** (frontend) and **Node.js + SQLite** (backend).  
The app allows users to take a multiple-choice quiz, submit answers, and see their score. All quiz questions are stored in an SQLite database, and the backend calculates the score.

---

## Features

- Quiz questions fetched dynamically from SQLite.
- One question displayed at a time with multiple-choice options.
- Selected options are highlighted in green.
- Navigation buttons: Previous, Next.
- Submit button on the last question.
- Score is calculated on the backend and displayed on the result page.
- Consistent background image across all pages.
- Fully responsive design.

---

## Setup Instructions

Follow these steps to get the project running locally.

---

### **1. Clone the repository**
```bash
git clone https://github.com/RVGujare/Quiz-App.git
cd Quiz-App

```
### **2. Set up the Backend (Node.js + SQLite)**
1. Navigate to the backend folder:
```bash
cd quiz_backend
```
2. Install dependencies:
```bash
npm install
```
3. Seed the SQLite database with sample questions:
```bash
node seed.js
```
4. Start the backend server:
```bash
node index.js
```
Backend URL: http://localhost:5000

Available Endpoints:

Method	Endpoint	Description
GET	/quiz	Fetch all quiz questions
POST	/submit	Submit user answers & get score

Make sure the backend is running before starting the frontend.


### **3. Set up the Frontend (Angular)**
1. Navigate to the frontend folder:
```bash
cd quiz-frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the Angular development server:
```bash
ng serve
```

Frontend URL: http://localhost:4200

---

### **4. Using the App**

Open http://localhost:4200 in your browser.

Click Start Quiz to begin.

Answer the questions (selected options turn green).

Navigate using Previous and Next buttons.

Click Submit on the last question to see your score.
