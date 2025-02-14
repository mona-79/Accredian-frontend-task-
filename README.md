# Refer and Earn Application

A simple application that allows users to refer friends via email, and earn rewards. It integrates the frontend with a backend server using **React** for the UI and **Node.js** with **Express** for the backend to send referral emails via **Nodemailer**.

## Features
- **Referral System**: Users can refer their friends by entering their name and email.
- **Email Notification**: Sends a referral email to the referred person.
- **Frontend with React**: User-friendly UI built using ReactJS and TailwindCSS.
- **Backend with Node.js**: The backend is powered by Express.js and Nodemailer to handle email sending.

## Prerequisites
- **Node.js** (version 12 or later)
- **npm** or **yarn**
- **Postman** (for testing API)

## Installation

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/yourusername/refer-earn.git
cd refer-earn
```

### 2. Install Dependencies

#### Frontend (React)

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install the required dependencies:

```bash
npm install
```

#### Backend (Node.js with Express)

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install the required dependencies:

```bash
npm install
```

## Setting Up Environment Variables

Create a `.env` file in the **backend** directory with the following variables:

```plaintext
EMAIL=your-email@example.com
EMAIL_PASSWORD=your-email-password
```

Replace `your-email@example.com` and `your-email-password` with the credentials for the email account that will send the referral emails.

> **Note:** If you're using Gmail, make sure to enable access to less secure apps, or use OAuth2 authentication for production.

## Running the Application

### 1. Start the Backend Server

Navigate to the **backend** folder and start the server:

```bash
cd backend
node server.js
```

The server will run on port `5000` by default.

### 2. Start the Frontend React App

In a new terminal window, navigate to the **frontend** folder and start the React development server:

```bash
cd frontend
npm start
```

The frontend app will run on port `3000` by default. Open `http://localhost:3000` in your browser to view the app.

## Testing the API

Use **Postman** to test the `POST /sendReferral` endpoint.

1. **URL**: `http://localhost:5000/sendReferral`
2. **Method**: POST
3. **Body**: JSON format with referrer’s name and friend’s email:
   ```json
   {
     "referrerName": "John Doe",
     "friendEmail": "friend@example.com"
   }
   ```

You should see a success message once the email is sent.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
