import { SortOrder } from "../../util/SortOrder";

export type SeasonCourseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  courseId?: SortOrder;
  seasonId?: SortOrder;
};
