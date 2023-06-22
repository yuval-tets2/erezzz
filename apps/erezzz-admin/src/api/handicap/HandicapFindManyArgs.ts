import { HandicapWhereInput } from "./HandicapWhereInput";
import { HandicapOrderByInput } from "./HandicapOrderByInput";

export type HandicapFindManyArgs = {
  where?: HandicapWhereInput;
  orderBy?: Array<HandicapOrderByInput>;
  skip?: number;
  take?: number;
};
