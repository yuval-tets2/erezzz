import { SortOrder } from "../../util/SortOrder";

export type CourseRatingOrderByInput = {
  id?: SortOrder;
  tee?: SortOrder;
  courseSlope?: SortOrder;
  courseRating?: SortOrder;
  coursePar?: SortOrder;
  frontSlope?: SortOrder;
  frontRating?: SortOrder;
  frontPar?: SortOrder;
  backSlope?: SortOrder;
  backRating?: SortOrder;
  backPar?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  courseId?: SortOrder;
};
