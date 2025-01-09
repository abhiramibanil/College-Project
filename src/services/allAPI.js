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

//department list
export const departmentApi = async () => {
  return await commonAPI('GET', `${serverUrl}/departments-list/`, '', '');
};

//add department
export const addDepartmentApi = async (formData, reqHeader) => {
  try {
    const response = await axios.post(
      '${serverUrl}/departments/',
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


//delete department
export const deleteDeptApi = async (id, token) => {
  return await commonAPI('DELETE', `${serverUrl}/departments/${id}/`, '', {
    Authorization: `Bearer ${token}`,
  });
};


//edit department
export const editDeptApi = async (id, deptdetails, token) => {
  return await commonAPI('PUT', `${serverUrl}/departments/${id}/`, deptdetails, {
    Authorization: `Bearer ${token}`,
  });
};



export const facultyApi = async (token) => {
  try {
    const response = await axios.get(`${serverUrl}/falist/`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass token in Authorization header
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching faculty data", error);
    throw error; // Rethrow error for proper handling in the component
  }
};

//delete faculty
export const deleteFacultyApi = async (id, token) => {
  return await commonAPI('DELETE', `${serverUrl}/falist/${id}/`, '', {
    Authorization: `Bearer ${token}`,
  });
};

//edit faculty
export const editFacultyApi = async (id, facultydetails, token) => {
  return await commonAPI('PUT', `${serverUrl}/falist/${id}/`, facultydetails, {
    Authorization: `Bearer ${token}`,
  });
};