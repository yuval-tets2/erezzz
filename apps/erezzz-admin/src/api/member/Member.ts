import { Matchscore } from "../matchscore/Matchscore";
import { Score } from "../score/Score";
import { Team } from "../team/Team";

export type Member = {
  matchscore?: Array<Matchscore>;
  scores?: Array<Score>;
  team?: Array<Team>;
  id: number | null;
  lname: string | null;
  fname: string | null;
  email: string | null;
  active: string;
  tee?: "MEN" | "SENIOR" | "LADIES";
  ghin: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};
