import { Team } from "../team/Team";

export type Teamscore = {
  id: number | null;
  teamIid: number;
  dateOfPlay: Date;
  points: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  team?: Team | null;
};
