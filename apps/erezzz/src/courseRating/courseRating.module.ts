import { Module } from "@nestjs/common";
import { CourseRatingModuleBase } from "./base/courseRating.module.base";
import { CourseRatingService } from "./courseRating.service";
import { CourseRatingController } from "./courseRating.controller";
import { CourseRatingResolver } from "./courseRating.resolver";

@Module({
  imports: [CourseRatingModuleBase],
  controllers: [CourseRatingController],
  providers: [CourseRatingService, CourseRatingResolver],
  exports: [CourseRatingService],
})
export class CourseRatingModule {}
