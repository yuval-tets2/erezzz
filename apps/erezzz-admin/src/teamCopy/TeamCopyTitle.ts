import { TeamCopy as TTeamCopy } from "../api/teamCopy/TeamCopy";

export const TEAMCOPY_TITLE_FIELD = "id";

export const TeamCopyTitle = (record: TTeamCopy): string => {
  return record.id || String(record.id);
};
