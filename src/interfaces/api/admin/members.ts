import { IUser } from "../../user-model";

export interface IGetMembersResponse {
  members: IUser[];
}

export interface IGetMemberByNameResponse {
  members: IUser[];
}

export interface IGetTotalMembersResponse {
  total_members: number;
}

export interface IGetMemberByIdResponse {
  member: IUser;
}

export interface IDeleteMemberResponse {
  message: string;
}
