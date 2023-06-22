import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HoleService } from "./hole.service";
import { HoleControllerBase } from "./base/hole.controller.base";

@swagger.ApiTags("holes")
@common.Controller("holes")
export class HoleController extends HoleControllerBase {
  constructor(
    protected readonly service: HoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
