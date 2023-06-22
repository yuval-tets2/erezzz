import { Testschedule as TTestschedule } from "../api/testschedule/Testschedule";

export const TESTSCHEDULE_TITLE_FIELD = "id";

export const TestscheduleTitle = (record: TTestschedule): string => {
  return record.id || String(record.id);
};
