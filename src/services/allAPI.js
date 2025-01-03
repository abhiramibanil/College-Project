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
      { headers: reqHeader }
    );
    return response;
  } catch (err) {
    throw err;
  }
};


export const deleteDeptApi = async (id) => {
  return await commonAPI('DELETE', `${serverUrl}/departments/${id}/`, '', '');
};
