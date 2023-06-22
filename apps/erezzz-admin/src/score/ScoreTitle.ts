import { Score as TScore } from "../api/score/Score";

export const SCORE_TITLE_FIELD = "lastname";

export const ScoreTitle = (record: TScore): string => {
  return record.lastname || String(record.id);
};
