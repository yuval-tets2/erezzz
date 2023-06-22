import { HandicapHistory as THandicapHistory } from "../api/handicapHistory/HandicapHistory";

export const HANDICAPHISTORY_TITLE_FIELD = "playerName";

export const HandicapHistoryTitle = (record: THandicapHistory): string => {
  return record.playerName || String(record.id);
};
