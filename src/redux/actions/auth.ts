import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ILoginForm } from "../../interfaces/auth";
import { authLogin } from "../../services/auth";
import { RootState } from "../store";
import { ACTION_AUTH } from "../types/auth";

export const login = (
  data: ILoginForm
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      let result = await authLogin(data);
      dispatch(dispatchLogin(result.data));
      return result;
    } catch (error) {
      console.log(error);
      return {};
    }
  };
};

export const dispatchLogin = (response: object) => {
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
