import { INotification } from "../notification-model";

export interface INotificationsState {
  list: INotification[];
  loading: boolean;
}
