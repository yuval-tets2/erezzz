import { Course } from "../course/Course";
import { Season } from "../season/Season";

export type SeasonCourse = {
  id: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  course?: Course;
  season?: Season;
};
