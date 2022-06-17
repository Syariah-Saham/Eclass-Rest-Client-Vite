import { apiService, methodServices } from "./api-service";

export const testApi = () => {
  return apiService<{ message: string }, unknown>(
    "/welcome",
    methodServices.GET
  );
};
