import { ICertificate } from "../../course-model";
import { IPayment } from "../../payment-model";
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
  payments: IPayment[];
  courses: ICertificate[];
}

export interface IDeleteMemberResponse {
  message: string;
}

export interface IToggleCourseMemberResponse {
  message: string;
}
