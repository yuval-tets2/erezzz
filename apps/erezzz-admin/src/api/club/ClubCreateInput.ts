import { CourseCreateNestedManyWithoutClubsInput } from "./CourseCreateNestedManyWithoutClubsInput";

export type ClubCreateInput = {
  createdAt?: Date | null;
  updatedAt?: Date | null;
  name: string;
  course?: CourseCreateNestedManyWithoutClubsInput;
};
