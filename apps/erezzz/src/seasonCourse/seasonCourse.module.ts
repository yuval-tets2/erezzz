import { Module } from "@nestjs/common";
import { SeasonCourseModuleBase } from "./base/seasonCourse.module.base";
import { SeasonCourseService } from "./seasonCourse.service";
import { SeasonCourseController } from "./seasonCourse.controller";
import { SeasonCourseResolver } from "./seasonCourse.resolver";

@Module({
  imports: [SeasonCourseModuleBase],
  controllers: [SeasonCourseController],
  providers: [SeasonCourseService, SeasonCourseResolver],
  exports: [SeasonCourseService],
})
export class SeasonCourseModule {}
