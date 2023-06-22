import { Matchscore } from "../matchscore/Matchscore";
import { Score } from "../score/Score";

export type Schedule = {
  matchscore?: Array<Matchscore>;
  id: number | null;
  dateOfPlay: Date | null;
  idTeam1: number | null;
  idPlayer1: number | null;
  idTeam2: number | null;
  idPlayer2: number | null;
  createdAt: Date | null;
  updatedAt: Date;
  scores?: Array<Score>;
};
