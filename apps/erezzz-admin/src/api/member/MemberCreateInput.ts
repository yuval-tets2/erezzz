import { MatchscoreCreateNestedManyWithoutMembersInput } from "./MatchscoreCreateNestedManyWithoutMembersInput";
import { ScoreCreateNestedManyWithoutMembersInput } from "./ScoreCreateNestedManyWithoutMembersInput";
import { TeamCreateNestedManyWithoutMembersInput } from "./TeamCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  matchscore?: MatchscoreCreateNestedManyWithoutMembersInput;
  scores?: ScoreCreateNestedManyWithoutMembersInput;
  team?: TeamCreateNestedManyWithoutMembersInput;
  lname?: string | null;
  fname?: string | null;
  email?: string | null;
  active: string;
  tee: "MEN" | "SENIOR" | "LADIES";
  ghin: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};
