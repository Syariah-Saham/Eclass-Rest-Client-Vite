export interface ICreateMentorForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  occupation: string;
  short_profile: string;
  photo: Blob;
}

export interface IUpdateMentorForm {
  id: number;
  name: string;
  occupation: string;
  short_profile: string;
}
