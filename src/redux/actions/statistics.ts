import { IStatistic } from "../../interfaces/statistic-model";
import { ACTION_STATISTICS } from "../../types/actions/statistics";

export const storeStatistics = (data: IStatistic[]) => {
  return {
    type: ACTION_STATISTICS.STORE,
    data,
  };
};
