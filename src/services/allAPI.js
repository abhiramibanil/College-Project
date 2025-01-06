import axios from 'axios';
import { commonAPI } from './commonAPI';
import { serverUrl } from './serverurl';

// Login API
export const loginApi = async (userDetails) => {
  return await commonAPI('POST', `${serverUrl}/login/`, userDetails, '');
};

// Register API
export const registerApi = async (userDetails) => {
  return await commonAPI('POST', `${serverUrl}/register/`, userDetails, '');
};

// OTP Verification API
export const verifyOtpApi = async (otpDetails) => {
  return await commonAPI('POST', `${serverUrl}/verify_otp/`, otpDetails, '');
};

// Resend OTP API
export const resendOtpApi = async (userDetails) => {
  return await commonAPI('POST', `${serverUrl}/resend_otp/`, userDetails, '');
};

export const departmentApi = async () => {
  return await commonAPI('GET', `${serverUrl}/departments-list/`, '', '');
};
export const addDepartmentApi = async (formData, reqHeader) => {
  try {
    const response = await axios.post(
      'http://192.168.1.85:8000/api/departments/',
      formData,
      {
        headers: {
          ...reqHeader, // Include authorization and other necessary headers
          'Content-Type': 'multipart/form-data', // Ensure this matches backend expectations
        },
      }
    );
    return response;
  } catch (err) {
    console.error('Error in addDepartmentApi:', err.response || err.message);
    throw err; // Let the calling function handle errors
  }
};



export const deleteDeptApi = async (id, token) => {
  return await commonAPI('DELETE', `${serverUrl}/departments/${id}/`, '', {
    Authorization: `Bearer ${token}`,
  });
};

export const editDeptApi = async (id, deptdetails, token) => {
  return await commonAPI('PUT', `${serverUrl}/departments/${id}/`, deptdetails, {
    Authorization: `Bearer ${token}`,
  });
};
