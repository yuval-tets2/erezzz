import { Tee } from "../tee/Tee";

export type Hole = {
  id: number | null;
  holeNumber: number;
  par: number;
  handicap: number;
  length: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  tee?: Tee;
};
