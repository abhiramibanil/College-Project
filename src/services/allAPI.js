import { commonAPI } from "./commonAPI"; // Correctly import the named export
import { serverUrl } from "./serverurl";


export const loginApi = async (userDetails) => {
  return await commonAPI("POST", `${serverUrl}/login/`, userDetails, "");
};

export const registerApi = async (userDetails) => {
  try {
    const response = await commonAPI("POST", `${commonAPI}/registration/`,userDetails, "");
    return response; 
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};