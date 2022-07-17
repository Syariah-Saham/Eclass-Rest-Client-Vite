import {
  IUpdateNameResponse,
  IUpdatePasswordResponse,
  IUpdatePhotoResponse,
} from "../interfaces/api/user";
import {
  IUpdateNameForm,
  IUpdatePasswordForm,
  IUpdatePhotoForm,
} from "../interfaces/forms/profile";
import { store } from "../redux/store";
import { apiService, methodServices } from "./api-service";

const URL = {
  BASE_USER: "/user",
};

export const updateName = (data: IUpdateNameForm) => {
  const token = store.getState().auth.token;
  const userId = store.getState().auth.user?.id;
  return apiService<IUpdateNameResponse, any>(
    URL.BASE_USER + `/${userId}/name`,
    methodServices.PATCH,
    data,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const updatePassword = (data: IUpdatePasswordForm) => {
  const token = store.getState().auth.token;
  const userId = store.getState().auth.user?.id;
  return apiService<IUpdatePasswordResponse, any>(
    URL.BASE_USER + `/${userId}/password`,
    methodServices.PATCH,
    data,
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
};

export const updatePhoto = (data: IUpdatePhotoForm) => {
  const token = store.getState().auth.token;
  const userId = store.getState().auth.user?.id;
  const fd = new FormData();
  fd.append("photo", data?.photo);
  return apiService<IUpdatePhotoResponse, any>(
    URL.BASE_USER + `/${userId}/photo?_method=patch`,
    methodServices.POST,
    fd,
    null,
    { Authorization: `Bearer ${token}` }
  );
};
