import { CourseUpdateManyWithoutClubsInput } from "./CourseUpdateManyWithoutClubsInput";

export type ClubUpdateInput = {
  createdAt?: Date | null;
  updatedAt?: Date | null;
  name?: string;
  course?: CourseUpdateManyWithoutClubsInput;
};
