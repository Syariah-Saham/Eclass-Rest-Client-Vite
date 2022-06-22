import { IUser } from "../../user-model";

export interface IGetMentorsResponse {
  mentors: IUser[];
}

export interface IGetMentorByNameResponse {
  mentors: IUser[];
}

export interface IGetMentorByIdResponse {
  mentor: IUser;
}

export interface ICreateMentorResponse {
  user: IUser;
  message: string;
}

export interface IDeleteMentorResponse {
  message: string;
}
