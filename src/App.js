import React, { useState } from 'react';
import { sendNotifications } from './services/api';
import './styles/app.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [interval, setInterval] = useState(5);
  const [repetitions, setRepetitions] = useState(3);
  const [status, setStatus] = useState('');

  const handleSendNotifications = async () => {
    try {
      setStatus('Sending notifications...');
      const response = await sendNotifications(
        title,
        message,
        parseInt(interval, 10),
        parseInt(repetitions, 10)
      );
      setStatus(response.message);
    } catch (error) {
      console.error('Error sending notifications:', error);
      setStatus('Failed to send notifications.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Notification Sender</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendNotifications();
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter notification title"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message: </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter notification message"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Interval (seconds): </label>
          <input
            type="number"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            min="1"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Repetitions: </label>
          <input
            type="number"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
            min="1"
          />
        </div>
        <button type="submit">Send Notifications</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default App;
