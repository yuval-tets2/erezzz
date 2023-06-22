import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { CourseRatingUpdateManyWithoutCoursesInput } from "./CourseRatingUpdateManyWithoutCoursesInput";
import { CourseTeetypeUpdateManyWithoutCoursesInput } from "./CourseTeetypeUpdateManyWithoutCoursesInput";
import { SeasonCourseUpdateManyWithoutCoursesInput } from "./SeasonCourseUpdateManyWithoutCoursesInput";
import { TeeUpdateManyWithoutCoursesInput } from "./TeeUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  courseName?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  club?: ClubWhereUniqueInput;
  courseRating?: CourseRatingUpdateManyWithoutCoursesInput;
  courseTeetype?: CourseTeetypeUpdateManyWithoutCoursesInput;
  seasonCourse?: SeasonCourseUpdateManyWithoutCoursesInput;
  tee?: TeeUpdateManyWithoutCoursesInput;
};
