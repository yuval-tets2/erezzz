import { CourseTeetypeWhereInput } from "./CourseTeetypeWhereInput";
import { CourseTeetypeOrderByInput } from "./CourseTeetypeOrderByInput";

export type CourseTeetypeFindManyArgs = {
  where?: CourseTeetypeWhereInput;
  orderBy?: Array<CourseTeetypeOrderByInput>;
  skip?: number;
  take?: number;
};
