import { MatchscoreListRelationFilter } from "../matchscore/MatchscoreListRelationFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type ScheduleWhereInput = {
  matchscore?: MatchscoreListRelationFilter;
  scores?: ScoreListRelationFilter;
};
