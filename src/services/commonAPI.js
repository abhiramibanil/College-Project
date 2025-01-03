import axios from 'axios';

// Generic API wrapper function
export const commonAPI = async (httpRequestType, url, reqBody, reqHeader = {}) => {
  try {
    // If an authentication token is required, make sure it's added to the headers
    const token = localStorage.getItem("authToken"); // Or get it from your state/store

    // Add Authorization header if token is available
    if (token) {
      reqHeader['Authorization'] = `Bearer ${token}`;
    }

    // Validate required inputs
    if (!httpRequestType || !url) {
      throw new Error('HTTP request type and URL must be provided');
    }

    // Prepare request configuration
    const reqConfig = {
      method: httpRequestType,
      url: url, 
      ...(httpRequestType !== 'GET' && { data: reqBody }), 
      headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
      timeout: 10000,
    };

    
    const result = await axios(reqConfig);
    return result;
  } catch (err) {
    console.error('API Error:', err); 

    
    if (err.response) {
      // Server responded with a status other than 2xx
      return { status: err.response.status, data: err.response.data };
    } else if (err.request) {
      // Request was made, but no response was received
      return { status: null, data: "No response received from server" };
    } else {
      // Something went wrong setting up the request
      return { status: null, data: err.message };
    }
  }
};