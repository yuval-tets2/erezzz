import { Teamscore as TTeamscore } from "../api/teamscore/Teamscore";

export const TEAMSCORE_TITLE_FIELD = "id";

export const TeamscoreTitle = (record: TTeamscore): string => {
  return record.id || String(record.id);
};
