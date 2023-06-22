import { MatchscoreListRelationFilter } from "../matchscore/MatchscoreListRelationFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type MemberWhereInput = {
  matchscore?: MatchscoreListRelationFilter;
  scores?: ScoreListRelationFilter;
  team?: TeamListRelationFilter;
};
