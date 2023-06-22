import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { HoleUpdateManyWithoutTeesInput } from "./HoleUpdateManyWithoutTeesInput";

export type TeeUpdateInput = {
  bslope?: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  course?: CourseWhereUniqueInput | null;
  hole?: HoleUpdateManyWithoutTeesInput;
  name?: string | null;
  gender?: "M" | "F";
  par?: number;
  rating?: number;
  slope?: number;
  frating?: number;
  fslope?: number;
  brating?: number;
};
