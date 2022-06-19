import { AnyAction } from "redux";
import { IAuthState } from "../../interfaces/state/auth-state";
import { ACTION_AUTH } from "../../types/auth";

const initialState: IAuthState = {
  status: false,
  user: null,
  role: null,
  token: null,
};

const authReducer = (state = initialState, action: AnyAction): IAuthState => {
  let tmpState = { ...state };
  switch (action?.type) {
    case ACTION_AUTH.LOGIN:
      const { token, user } = action.response;
      tmpState = {
        ...state,
        status: true,
        token: token,
        user: user,
        role: user.role,
      };
      break;
    case ACTION_AUTH.LOGOUT:
      localStorage.clear();
      tmpState = {
        status: false,
        token: null,
        user: null,
        role: null,
      };
      break;
    default:
      const localState = localStorage.getItem("eclass-auth");
      if (localState) {
        const tmpLocalState = JSON.parse(localState) as IAuthState;
        return tmpLocalState;
      }
      return state;
  }
  localStorage.setItem("eclass-auth", JSON.stringify(tmpState));
  return tmpState;
};

export default authReducer;
