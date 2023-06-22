import { RandomplayerWhereInput } from "./RandomplayerWhereInput";
import { RandomplayerOrderByInput } from "./RandomplayerOrderByInput";

export type RandomplayerFindManyArgs = {
  where?: RandomplayerWhereInput;
  orderBy?: Array<RandomplayerOrderByInput>;
  skip?: number;
  take?: number;
};
