import { IResources } from "./resources";

export type TRole = "member" | "admin" | "mentor";

export interface IUser extends IResources {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  profile_photo?: string;
  role: TRole;
  occupation?: string;
  short_profile?: string;
  created_at: string;
  updated_at?: string;
}
