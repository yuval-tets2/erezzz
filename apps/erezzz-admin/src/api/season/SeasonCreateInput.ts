import { SeasonCourseCreateNestedManyWithoutSeasonsInput } from "./SeasonCourseCreateNestedManyWithoutSeasonsInput";
import { TeamCreateNestedManyWithoutSeasonsInput } from "./TeamCreateNestedManyWithoutSeasonsInput";

export type SeasonCreateInput = {
  seasonCourse?: SeasonCourseCreateNestedManyWithoutSeasonsInput;
  team?: TeamCreateNestedManyWithoutSeasonsInput;
  name?: string | null;
  startDate: Date;
  endDate: Date;
  midseasonDate: Date;
  numTeams: number;
  playersPerTeam: number;
  scheduleCreated: number;
};
