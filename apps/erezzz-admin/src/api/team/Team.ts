import { Member } from "../member/Member";
import { Season } from "../season/Season";
import { Teamscore } from "../teamscore/Teamscore";

export type Team = {
  id: number | null;
  teamId: number | null;
  playerRank: number | null;
  sub: number;
  createdAt: Date | null;
  updatedAt: Date;
  members?: Member | null;
  season?: Season | null;
  teamscore?: Array<Teamscore>;
};
