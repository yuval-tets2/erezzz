import { SeasonCourseWhereInput } from "./SeasonCourseWhereInput";
import { SeasonCourseOrderByInput } from "./SeasonCourseOrderByInput";

export type SeasonCourseFindManyArgs = {
  where?: SeasonCourseWhereInput;
  orderBy?: Array<SeasonCourseOrderByInput>;
  skip?: number;
  take?: number;
};
