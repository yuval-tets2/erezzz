import { CourseRatingListRelationFilter } from "../courseRating/CourseRatingListRelationFilter";
import { CourseTeetypeListRelationFilter } from "../courseTeetype/CourseTeetypeListRelationFilter";
import { SeasonCourseListRelationFilter } from "../seasonCourse/SeasonCourseListRelationFilter";
import { TeeListRelationFilter } from "../tee/TeeListRelationFilter";

export type CourseWhereInput = {
  courseRating?: CourseRatingListRelationFilter;
  courseTeetype?: CourseTeetypeListRelationFilter;
  seasonCourse?: SeasonCourseListRelationFilter;
  tee?: TeeListRelationFilter;
};
