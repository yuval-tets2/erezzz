import { ClubWhereInput } from "./ClubWhereInput";
import { ClubOrderByInput } from "./ClubOrderByInput";

export type ClubFindManyArgs = {
  where?: ClubWhereInput;
  orderBy?: Array<ClubOrderByInput>;
  skip?: number;
  take?: number;
};
