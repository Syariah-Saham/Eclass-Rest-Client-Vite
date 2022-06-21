import { IUser } from "../../user-model";

export interface IGetMembersResponse {
  members: IUser[];
}

export interface IGetMemberByNameResponse {
  members: IUser[];
}

export interface IGetMemberByIdResponse {
  member: IUser;
}

export interface IDeleteMemberResponse {
  message: string;
}
