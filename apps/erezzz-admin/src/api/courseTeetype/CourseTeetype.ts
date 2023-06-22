import { Course } from "../course/Course";

export type CourseTeetype = {
  id: number | null;
  teeId: number;
  teeType?: "MEN" | "SENIOR" | "LADIES";
  createdAt: Date | null;
  updatedAt: Date | null;
  course?: Course;
};
