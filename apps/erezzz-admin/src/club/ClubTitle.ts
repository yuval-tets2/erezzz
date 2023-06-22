import { Club as TClub } from "../api/club/Club";

export const CLUB_TITLE_FIELD = "name";

export const ClubTitle = (record: TClub): string => {
  return record.name || String(record.id);
};
