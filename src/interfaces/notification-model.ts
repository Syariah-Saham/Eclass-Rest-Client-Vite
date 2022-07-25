import { IResources } from "./resources";

export interface INotification extends IResources {
  id: number;
  user_id: number;
  title: string;
  body: string;
  is_read: boolean;
  url?: string;
}
