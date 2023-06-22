import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamscoreUpdateInput = {
  teamIid?: number;
  dateOfPlay?: Date;
  points?: number;
  team?: TeamWhereUniqueInput | null;
};
