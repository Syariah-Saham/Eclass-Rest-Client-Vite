export type TRole = "member" | "admin" | "mentor";

export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  profile_photo?: string;
  role: TRole;
  created_at: string;
  updated_at?: string;
}
