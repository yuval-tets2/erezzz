import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  id?: SortOrder;
  courseName?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  clubId?: SortOrder;
};
