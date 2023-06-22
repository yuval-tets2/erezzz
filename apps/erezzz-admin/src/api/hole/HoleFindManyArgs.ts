import { HoleWhereInput } from "./HoleWhereInput";
import { HoleOrderByInput } from "./HoleOrderByInput";

export type HoleFindManyArgs = {
  where?: HoleWhereInput;
  orderBy?: Array<HoleOrderByInput>;
  skip?: number;
  take?: number;
};
