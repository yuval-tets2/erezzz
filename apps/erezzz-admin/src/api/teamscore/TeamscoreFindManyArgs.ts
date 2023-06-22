import { TeamscoreWhereInput } from "./TeamscoreWhereInput";
import { TeamscoreOrderByInput } from "./TeamscoreOrderByInput";

export type TeamscoreFindManyArgs = {
  where?: TeamscoreWhereInput;
  orderBy?: Array<TeamscoreOrderByInput>;
  skip?: number;
  take?: number;
};
