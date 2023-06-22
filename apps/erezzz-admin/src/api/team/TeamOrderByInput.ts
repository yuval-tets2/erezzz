import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  id?: SortOrder;
  teamId?: SortOrder;
  playerRank?: SortOrder;
  sub?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  membersId?: SortOrder;
  seasonId?: SortOrder;
};
