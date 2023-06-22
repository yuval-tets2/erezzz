import { TeamscoreCopy as TTeamscoreCopy } from "../api/teamscoreCopy/TeamscoreCopy";

export const TEAMSCORECOPY_TITLE_FIELD = "id";

export const TeamscoreCopyTitle = (record: TTeamscoreCopy): string => {
  return record.id || String(record.id);
};
