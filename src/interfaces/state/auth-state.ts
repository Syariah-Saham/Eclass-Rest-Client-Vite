import { IUser } from "../user-model";

export interface IAuthState {
  status: boolean;
  user: IUser | null;
  role: string | null;
  token: string | null;
}
