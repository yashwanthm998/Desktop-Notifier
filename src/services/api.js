import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001';

export const sendNotifications = async (title, message, interval, repetitions) => {
  const response = await axios.post(`${API_BASE_URL}/send_notifications`, {
    title,
    message,
    interval,
    repetitions,
  });
  return response.data; // Return the response data
};
