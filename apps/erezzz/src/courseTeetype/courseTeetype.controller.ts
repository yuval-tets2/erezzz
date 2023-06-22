import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CourseTeetypeService } from "./courseTeetype.service";
import { CourseTeetypeControllerBase } from "./base/courseTeetype.controller.base";

@swagger.ApiTags("courseTeetypes")
@common.Controller("courseTeetypes")
export class CourseTeetypeController extends CourseTeetypeControllerBase {
  constructor(
    protected readonly service: CourseTeetypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
