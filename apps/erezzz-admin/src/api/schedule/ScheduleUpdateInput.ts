import { MatchscoreUpdateManyWithoutSchedulesInput } from "./MatchscoreUpdateManyWithoutSchedulesInput";
import { ScoreUpdateManyWithoutSchedulesInput } from "./ScoreUpdateManyWithoutSchedulesInput";

export type ScheduleUpdateInput = {
  matchscore?: MatchscoreUpdateManyWithoutSchedulesInput;
  dateOfPlay?: Date | null;
  idTeam1?: number | null;
  idPlayer1?: number | null;
  idTeam2?: number | null;
  idPlayer2?: number | null;
  updatedAt?: Date;
  scores?: ScoreUpdateManyWithoutSchedulesInput;
};
