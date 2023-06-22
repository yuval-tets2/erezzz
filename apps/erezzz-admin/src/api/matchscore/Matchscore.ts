import { Member } from "../member/Member";
import { Schedule } from "../schedule/Schedule";

export type Matchscore = {
  id: number | null;
  teamId: number | null;
  playerPoints: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  members?: Member | null;
  schedule?: Schedule | null;
};
