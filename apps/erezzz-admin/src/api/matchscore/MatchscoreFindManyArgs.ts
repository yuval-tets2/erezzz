import { MatchscoreWhereInput } from "./MatchscoreWhereInput";
import { MatchscoreOrderByInput } from "./MatchscoreOrderByInput";

export type MatchscoreFindManyArgs = {
  where?: MatchscoreWhereInput;
  orderBy?: Array<MatchscoreOrderByInput>;
  skip?: number;
  take?: number;
};
