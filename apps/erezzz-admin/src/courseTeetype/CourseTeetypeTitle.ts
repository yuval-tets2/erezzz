import { CourseTeetype as TCourseTeetype } from "../api/courseTeetype/CourseTeetype";

export const COURSETEETYPE_TITLE_FIELD = "id";

export const CourseTeetypeTitle = (record: TCourseTeetype): string => {
  return record.id || String(record.id);
};
