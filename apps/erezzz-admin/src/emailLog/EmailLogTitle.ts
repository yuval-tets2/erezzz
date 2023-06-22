import { EmailLog as TEmailLog } from "../api/emailLog/EmailLog";

export const EMAILLOG_TITLE_FIELD = "speakerName";

export const EmailLogTitle = (record: TEmailLog): string => {
  return record.speakerName || String(record.id);
};
