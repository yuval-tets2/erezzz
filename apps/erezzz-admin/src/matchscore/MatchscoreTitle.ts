import { Matchscore as TMatchscore } from "../api/matchscore/Matchscore";

export const MATCHSCORE_TITLE_FIELD = "id";

export const MatchscoreTitle = (record: TMatchscore): string => {
  return record.id || String(record.id);
};
