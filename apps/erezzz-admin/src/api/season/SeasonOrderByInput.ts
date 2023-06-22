import { SortOrder } from "../../util/SortOrder";

export type SeasonOrderByInput = {
  updatedAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  midseasonDate?: SortOrder;
  numTeams?: SortOrder;
  playersPerTeam?: SortOrder;
  scheduleCreated?: SortOrder;
  createdAt?: SortOrder;
};
