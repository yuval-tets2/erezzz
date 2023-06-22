import { SeasonCourseUpdateManyWithoutSeasonsInput } from "./SeasonCourseUpdateManyWithoutSeasonsInput";
import { TeamUpdateManyWithoutSeasonsInput } from "./TeamUpdateManyWithoutSeasonsInput";

export type SeasonUpdateInput = {
  seasonCourse?: SeasonCourseUpdateManyWithoutSeasonsInput;
  team?: TeamUpdateManyWithoutSeasonsInput;
  name?: string | null;
  startDate?: Date;
  endDate?: Date;
  midseasonDate?: Date;
  numTeams?: number;
  playersPerTeam?: number;
  scheduleCreated?: number;
};
