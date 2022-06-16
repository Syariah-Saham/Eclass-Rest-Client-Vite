import { AnyAction } from "redux";
import { ACTION_AUTH } from "../types/auth";

interface IAuthState {
  status: boolean;
  user: string | null;
  role: string | null;
  token: string | null;
}

const initialState: IAuthState = {
  status: false,
  user: null,
  role: null,
  token: null,
};

const authReducer = (state = initialState, action: AnyAction): IAuthState => {
  switch (action?.type) {
    case ACTION_AUTH.LOGIN:
      const { token, user } = action.response;
      return {
        ...state,
        status: true,
        token: token,
        user: user,
        role: user.role,
      };
    case ACTION_AUTH.LOGOUT:
      return {
        status: false,
        token: null,
        user: null,
        role: null,
      };
    default:
      return state;
  }
};

export default authReducer;
