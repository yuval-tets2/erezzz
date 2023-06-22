import { ScoreWhereUniqueInput } from "./ScoreWhereUniqueInput";
import { ScoreUpdateInput } from "./ScoreUpdateInput";

export type UpdateScoreArgs = {
  where: ScoreWhereUniqueInput;
  data: ScoreUpdateInput;
};
