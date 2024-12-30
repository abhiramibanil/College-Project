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
