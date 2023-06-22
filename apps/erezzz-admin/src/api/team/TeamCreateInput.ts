import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../season/SeasonWhereUniqueInput";
import { TeamscoreCreateNestedManyWithoutTeamsInput } from "./TeamscoreCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  teamId?: number | null;
  playerRank?: number | null;
  sub: number;
  updatedAt: Date;
  members?: MemberWhereUniqueInput | null;
  season?: SeasonWhereUniqueInput | null;
  teamscore?: TeamscoreCreateNestedManyWithoutTeamsInput;
};
