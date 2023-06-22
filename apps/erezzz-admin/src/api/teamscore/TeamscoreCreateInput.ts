import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamscoreCreateInput = {
  teamIid: number;
  dateOfPlay: Date;
  points: number;
  team?: TeamWhereUniqueInput | null;
};
