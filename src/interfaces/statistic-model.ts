import { IResources } from "./resources";

export interface IStatistic extends IResources {
  id: number;
  month: number;
  year: number;
  users: number;
  incomes: number;
}
