import { Randomplayer as TRandomplayer } from "../api/randomplayer/Randomplayer";

export const RANDOMPLAYER_TITLE_FIELD = "lname";

export const RandomplayerTitle = (record: TRandomplayer): string => {
  return record.lname || String(record.id);
};
