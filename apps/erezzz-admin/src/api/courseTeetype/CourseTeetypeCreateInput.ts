import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type CourseTeetypeCreateInput = {
  teeId: number;
  teeType: "MEN" | "SENIOR" | "LADIES";
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course: CourseWhereUniqueInput;
};
