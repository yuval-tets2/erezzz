import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CourseRatingService } from "./courseRating.service";
import { CourseRatingControllerBase } from "./base/courseRating.controller.base";

@swagger.ApiTags("courseRatings")
@common.Controller("courseRatings")
export class CourseRatingController extends CourseRatingControllerBase {
  constructor(
    protected readonly service: CourseRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
