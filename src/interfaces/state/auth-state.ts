export interface IAuthState {
  status: boolean;
  user: string | null;
  role: string | null;
  token: string | null;
}
