import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SeasonCourseService } from "./seasonCourse.service";
import { SeasonCourseControllerBase } from "./base/seasonCourse.controller.base";

@swagger.ApiTags("seasonCourses")
@common.Controller("seasonCourses")
export class SeasonCourseController extends SeasonCourseControllerBase {
  constructor(
    protected readonly service: SeasonCourseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
