import { SeasonCourse as TSeasonCourse } from "../api/seasonCourse/SeasonCourse";

export const SEASONCOURSE_TITLE_FIELD = "id";

export const SeasonCourseTitle = (record: TSeasonCourse): string => {
  return record.id || String(record.id);
};
