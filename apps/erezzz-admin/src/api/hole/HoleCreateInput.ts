import { TeeWhereUniqueInput } from "../tee/TeeWhereUniqueInput";

export type HoleCreateInput = {
  holeNumber: number;
  par: number;
  handicap: number;
  length: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  tee: TeeWhereUniqueInput;
};
