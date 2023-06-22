import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";
import { TeamscoreUpdateManyWithoutTeamsInput } from "./TeamscoreUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  teamId?: number | null;
  playerRank?: number | null;
  sub?: number;
  updatedAt?: Date;
  members?: MemberWhereUniqueInput | null;
  season?: SeasonWhereUniqueInput | null;
  teamscore?: TeamscoreUpdateManyWithoutTeamsInput;
};
