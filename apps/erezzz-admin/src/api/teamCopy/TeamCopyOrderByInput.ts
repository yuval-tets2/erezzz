import { SortOrder } from "../../util/SortOrder";

export type TeamCopyOrderByInput = {
  id?: SortOrder;
  seasonId?: SortOrder;
  teamId?: SortOrder;
  playerId?: SortOrder;
  playerRank?: SortOrder;
  sub?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
