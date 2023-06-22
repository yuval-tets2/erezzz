import { SortOrder } from "../../util/SortOrder";

export type HoleOrderByInput = {
  id?: SortOrder;
  holeNumber?: SortOrder;
  par?: SortOrder;
  handicap?: SortOrder;
  length?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  teeId?: SortOrder;
};
