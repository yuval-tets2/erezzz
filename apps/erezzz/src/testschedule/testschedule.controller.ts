import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestscheduleService } from "./testschedule.service";
import { TestscheduleControllerBase } from "./base/testschedule.controller.base";

@swagger.ApiTags("testschedules")
@common.Controller("testschedules")
export class TestscheduleController extends TestscheduleControllerBase {
  constructor(
    protected readonly service: TestscheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
