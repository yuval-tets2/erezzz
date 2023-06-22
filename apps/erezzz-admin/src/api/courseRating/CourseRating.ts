import { Course } from "../course/Course";

export type CourseRating = {
  id: number | null;
  tee: string;
  courseSlope: number;
  courseRating: number;
  coursePar: number;
  frontSlope: number;
  frontRating: number;
  frontPar: number;
  backSlope: number;
  backRating: number;
  backPar: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  course?: Course;
};
