import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type CourseRatingCreateInput = {
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
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course: CourseWhereUniqueInput;
};
