import { Member as TMember } from "../api/member/Member";

export const MEMBER_TITLE_FIELD = "lname";

export const MemberTitle = (record: TMember): string => {
  return record.lname || String(record.id);
};
