import { SortOrder } from "../../util/SortOrder";

export type MatchscoreOrderByInput = {
  id?: SortOrder;
  teamId?: SortOrder;
  playerPoints?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  membersId?: SortOrder;
  scheduleId?: SortOrder;
};
