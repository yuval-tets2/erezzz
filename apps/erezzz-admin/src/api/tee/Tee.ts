import { Course } from "../course/Course";
import { Hole } from "../hole/Hole";

export type Tee = {
  bslope: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  course?: Course | null;
  hole?: Array<Hole>;
  id: number | null;
  name: string | null;
  gender?: "M" | "F";
  par: number;
  rating: number;
  slope: number;
  frating: number;
  fslope: number;
  brating: number;
};
