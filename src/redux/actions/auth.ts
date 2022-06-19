import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ILoginForm, TLoginAction } from "../../interfaces/auth";
import { authLogin } from "../../services/auth";
import { RootState } from "../store";
import { ACTION_AUTH } from "../../types/auth";

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

export const logout = () => {
  return {
    type: ACTION_AUTH.LOGOUT,
  };
};
