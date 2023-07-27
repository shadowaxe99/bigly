```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const makeAxiosApiCalls = {
  authenticate: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/authenticate`, { username, password });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  createTask: async (task) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  completeTest: async (testId, results) => {
    try {
      const response = await axios.put(`${API_URL}/tests/${testId}`, results);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  updateDocumentation: async (docId, content) => {
    try {
      const response = await axios.put(`${API_URL}/docs/${docId}`, content);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
```