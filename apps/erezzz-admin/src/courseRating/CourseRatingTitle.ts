import { CourseRating as TCourseRating } from "../api/courseRating/CourseRating";

export const COURSERATING_TITLE_FIELD = "tee";

export const CourseRatingTitle = (record: TCourseRating): string => {
  return record.tee || String(record.id);
};
