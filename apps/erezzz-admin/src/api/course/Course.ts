import { Club } from "../club/Club";
import { CourseRating } from "../courseRating/CourseRating";
import { CourseTeetype } from "../courseTeetype/CourseTeetype";
import { SeasonCourse } from "../seasonCourse/SeasonCourse";
import { Tee } from "../tee/Tee";

export type Course = {
  id: number | null;
  courseName: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  club?: Club;
  courseRating?: Array<CourseRating>;
  courseTeetype?: Array<CourseTeetype>;
  seasonCourse?: Array<SeasonCourse>;
  tee?: Array<Tee>;
};
