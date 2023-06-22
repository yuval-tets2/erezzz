import { Tee as TTee } from "../api/tee/Tee";

export const TEE_TITLE_FIELD = "name";

export const TeeTitle = (record: TTee): string => {
  return record.name || String(record.id);
};
