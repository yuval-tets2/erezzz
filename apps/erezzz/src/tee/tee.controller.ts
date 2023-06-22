import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeeService } from "./tee.service";
import { TeeControllerBase } from "./base/tee.controller.base";

@swagger.ApiTags("tees")
@common.Controller("tees")
export class TeeController extends TeeControllerBase {
  constructor(
    protected readonly service: TeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
