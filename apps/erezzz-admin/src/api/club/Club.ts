import { Course } from "../course/Course";

export type Club = {
  createdAt: Date | null;
  updatedAt: Date | null;
  id: number | null;
  name: string;
  course?: Array<Course>;
};
