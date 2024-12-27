# Desktop Notifier Application

## Overview
The **Desktop Notifier Application** allows users to send notifications to their desktop at specified intervals and repetitions. The application is built using **React** for the frontend and **Flask** for the backend.

## Features
- Input fields to specify the notification title and message.
- Options to set the interval (in seconds) between notifications.
- Ability to specify the number of repetitions for the notification.
- Real-time status updates on the notification-sending process.

## Technologies Used
### Frontend
- **React**: For creating a dynamic and interactive user interface.
- **CSS**: For styling the components.

### Backend
- **Flask**: To handle API requests and process notifications.
- **Axios**: To make HTTP requests from the frontend to the backend.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your system.
- Python installed on your system.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <[repository-url](https://github.com/yashwanthm998/Desktop-Notifier)>
   cd <repository-folder>/backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows, use `venv\Scripts\activate`
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```
   The backend will start on `http://localhost:5001`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will start on `http://localhost:3000`.

## Usage
1. Open the application in your web browser.
2. Fill out the following fields:
   - **Title**: Enter the notification title.
   - **Message**: Enter the notification message.
   - **Interval**: Set the interval between notifications (in seconds).
   - **Repetitions**: Set the number of times the notification should be sent.
3. Click on **Send Notifications** to initiate the notification process.
4. The status message below the form will provide feedback on the operation.


## API Endpoints
### POST `/send_notifications`
**Request Body:**
```json
{
  "title": "<notification-title>",
  "message": "<notification-message>",
  "interval": <interval-in-seconds>,
  "repetitions": <number-of-repetitions>
}
```
**Response:**
```json
{
  "message": "Notifications sent successfully."
}
```
