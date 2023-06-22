import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  id?: SortOrder;
  lname?: SortOrder;
  fname?: SortOrder;
  email?: SortOrder;
  active?: SortOrder;
  tee?: SortOrder;
  ghin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
