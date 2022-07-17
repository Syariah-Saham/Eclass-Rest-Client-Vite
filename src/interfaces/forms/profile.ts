export interface IUpdateNameForm {
  name: string;
}

export interface IUpdatePasswordForm {
  password: string;
  new_password: string;
  new_password_confirmation: string;
}

export interface IUpdatePhotoForm {
  photo: Blob;
}
