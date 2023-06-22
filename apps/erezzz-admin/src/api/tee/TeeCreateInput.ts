import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { HoleCreateNestedManyWithoutTeesInput } from "./HoleCreateNestedManyWithoutTeesInput";

export type TeeCreateInput = {
  bslope: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseWhereUniqueInput | null;
  hole?: HoleCreateNestedManyWithoutTeesInput;
  name?: string | null;
  gender: "M" | "F";
  par: number;
  rating: number;
  slope: number;
  frating: number;
  fslope: number;
  brating: number;
};
