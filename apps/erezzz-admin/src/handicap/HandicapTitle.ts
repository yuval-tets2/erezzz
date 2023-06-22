import { Handicap as THandicap } from "../api/handicap/Handicap";

export const HANDICAP_TITLE_FIELD = "id";

export const HandicapTitle = (record: THandicap): string => {
  return record.id || String(record.id);
};
