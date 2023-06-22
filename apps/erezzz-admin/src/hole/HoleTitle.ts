import { Hole as THole } from "../api/hole/Hole";

export const HOLE_TITLE_FIELD = "id";

export const HoleTitle = (record: THole): string => {
  return record.id || String(record.id);
};
