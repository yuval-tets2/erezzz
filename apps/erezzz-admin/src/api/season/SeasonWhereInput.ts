import { SeasonCourseListRelationFilter } from "../seasonCourse/SeasonCourseListRelationFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type SeasonWhereInput = {
  seasonCourse?: SeasonCourseListRelationFilter;
  team?: TeamListRelationFilter;
};
