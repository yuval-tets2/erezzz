import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";

export type SeasonCourseUpdateInput = {
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseWhereUniqueInput;
  season?: SeasonWhereUniqueInput;
};
