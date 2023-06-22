import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type MatchscoreCreateInput = {
  teamId?: number | null;
  playerPoints: number;
  members?: MemberWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
};
