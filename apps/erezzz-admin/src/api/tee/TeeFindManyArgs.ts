import { TeeWhereInput } from "./TeeWhereInput";
import { TeeOrderByInput } from "./TeeOrderByInput";

export type TeeFindManyArgs = {
  where?: TeeWhereInput;
  orderBy?: Array<TeeOrderByInput>;
  skip?: number;
  take?: number;
};
