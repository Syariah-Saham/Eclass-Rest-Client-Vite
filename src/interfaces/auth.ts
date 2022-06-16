export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
