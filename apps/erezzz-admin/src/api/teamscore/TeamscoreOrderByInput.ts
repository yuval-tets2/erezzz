import { SortOrder } from "../../util/SortOrder";

export type TeamscoreOrderByInput = {
  id?: SortOrder;
  teamIid?: SortOrder;
  dateOfPlay?: SortOrder;
  points?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  teamId?: SortOrder;
};
