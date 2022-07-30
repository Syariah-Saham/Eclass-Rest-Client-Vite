import { IStatistic } from "../statistic-model";

export interface IStatisticsState {
  loading: boolean;
  list: IStatistic[];
}
