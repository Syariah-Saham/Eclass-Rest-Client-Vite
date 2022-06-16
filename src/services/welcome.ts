import { apiService, methodServices } from "./api-service";

export const testApi = () => {
  return apiService("/welcome", methodServices.GET);
};
