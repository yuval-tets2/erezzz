import { TeamCopyWhereInput } from "./TeamCopyWhereInput";
import { TeamCopyOrderByInput } from "./TeamCopyOrderByInput";

export type TeamCopyFindManyArgs = {
  where?: TeamCopyWhereInput;
  orderBy?: Array<TeamCopyOrderByInput>;
  skip?: number;
  take?: number;
};
