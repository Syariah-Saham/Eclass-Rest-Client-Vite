import { AnyAction } from "redux";
import { IAuthState } from "../../interfaces/state/auth-state";
import { IUser } from "../../interfaces/user-model";
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
      sessionStorage.clear();
      tmpState = {
        status: false,
        token: null,
        user: null,
        role: null,
      };
      break;
    case ACTION_AUTH.UPDATE_NAME:
      const name = action.name;
      let tmpUser = { ...state.user, name: name } as IUser;
      tmpState = {
        ...state,
        user: tmpUser,
      };
      break;
    default:
      const localState = sessionStorage.getItem("eclass-auth");
      if (localState) {
        const tmpLocalState = JSON.parse(localState) as IAuthState;
        return tmpLocalState;
      }
      return state;
  }
  sessionStorage.setItem("eclass-auth", JSON.stringify(tmpState));
  return tmpState;
};

export default authReducer;
