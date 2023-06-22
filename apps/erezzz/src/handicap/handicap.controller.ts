import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HandicapService } from "./handicap.service";
import { HandicapControllerBase } from "./base/handicap.controller.base";

@swagger.ApiTags("handicaps")
@common.Controller("handicaps")
export class HandicapController extends HandicapControllerBase {
  constructor(
    protected readonly service: HandicapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
