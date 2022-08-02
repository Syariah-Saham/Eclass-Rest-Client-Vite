import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ILoginForm, TLoginAction } from "../../interfaces/auth";
import { authLogin } from "../../services/auth";
import { RootState } from "../store";
import { ACTION_AUTH } from "../../types/auth";
import { IUpdateNameForm } from "../../interfaces/forms/profile";
import { TUpdateNameAction } from "../../interfaces/api/user";
import { updateName } from "../../services/user";

export const login = (
  data: ILoginForm
): ThunkAction<TLoginAction, RootState, unknown, AnyAction> => {
  return async (dispatch): TLoginAction => {
    try {
      let result = await authLogin(data);
      dispatch(_login_(result.data));
      return result.data;
    } catch (error) {
      return error;
    }
  };
};

export const _login_ = (response: object) => {
  return {
    type: ACTION_AUTH.LOGIN,
    response: response,
  };
};

export const updateNameAction = (
  data: IUpdateNameForm
): ThunkAction<TUpdateNameAction, RootState, unknown, AnyAction> => {
  return async (dispatch): TUpdateNameAction => {
    try {
      let result = await updateName(data);
      dispatch(_updateNameAction_(data.name));
      return result.data;
    } catch (error) {
      return error;
    }
  };
};

export const _updateNameAction_ = (name: string) => {
  return {
    type: ACTION_AUTH.UPDATE_NAME,
    name: name,
  };
};

export const updatePhotoAction = (path: string) => {
  return {
    type: ACTION_AUTH.UPDATE_PHOTO,
    path: path,
  };
};

export const logout = () => {
  return {
    type: ACTION_AUTH.LOGOUT,
  };
};

export const updateEmailVerifiedAt = (data: { time: string }) => {
  return {
    type: ACTION_AUTH.UPDATE_EMAIL_VERIFIED,
    data: data,
  };
};
