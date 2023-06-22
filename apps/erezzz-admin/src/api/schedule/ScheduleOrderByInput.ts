import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  id?: SortOrder;
  dateOfPlay?: SortOrder;
  idTeam1?: SortOrder;
  idPlayer1?: SortOrder;
  idTeam2?: SortOrder;
  idPlayer2?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
