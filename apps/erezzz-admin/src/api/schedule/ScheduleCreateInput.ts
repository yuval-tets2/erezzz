import { MatchscoreCreateNestedManyWithoutSchedulesInput } from "./MatchscoreCreateNestedManyWithoutSchedulesInput";
import { ScoreCreateNestedManyWithoutSchedulesInput } from "./ScoreCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  matchscore?: MatchscoreCreateNestedManyWithoutSchedulesInput;
  dateOfPlay?: Date | null;
  idTeam1?: number | null;
  idPlayer1?: number | null;
  idTeam2?: number | null;
  idPlayer2?: number | null;
  updatedAt: Date;
  scores?: ScoreCreateNestedManyWithoutSchedulesInput;
};
