import { ClubWhereUniqueInput } from "../club/ClubWhereUniqueInput";
import { CourseRatingCreateNestedManyWithoutCoursesInput } from "./CourseRatingCreateNestedManyWithoutCoursesInput";
import { CourseTeetypeCreateNestedManyWithoutCoursesInput } from "./CourseTeetypeCreateNestedManyWithoutCoursesInput";
import { SeasonCourseCreateNestedManyWithoutCoursesInput } from "./SeasonCourseCreateNestedManyWithoutCoursesInput";
import { TeeCreateNestedManyWithoutCoursesInput } from "./TeeCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  courseName: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  club: ClubWhereUniqueInput;
  courseRating?: CourseRatingCreateNestedManyWithoutCoursesInput;
  courseTeetype?: CourseTeetypeCreateNestedManyWithoutCoursesInput;
  seasonCourse?: SeasonCourseCreateNestedManyWithoutCoursesInput;
  tee?: TeeCreateNestedManyWithoutCoursesInput;
};
