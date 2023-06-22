import { CourseRatingWhereInput } from "./CourseRatingWhereInput";
import { CourseRatingOrderByInput } from "./CourseRatingOrderByInput";

export type CourseRatingFindManyArgs = {
  where?: CourseRatingWhereInput;
  orderBy?: Array<CourseRatingOrderByInput>;
  skip?: number;
  take?: number;
};
