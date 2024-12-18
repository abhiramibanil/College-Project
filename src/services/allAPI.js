import { commonAPI } from "./commonAPI"; // Correctly import the named export
import { serverUrl } from "./serverurl";


export const loginApi = async (userDetails) => {
  return await commonAPI("POST", `${serverUrl}/login/`, userDetails, "");
};
