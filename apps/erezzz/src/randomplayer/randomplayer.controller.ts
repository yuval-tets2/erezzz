import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RandomplayerService } from "./randomplayer.service";
import { RandomplayerControllerBase } from "./base/randomplayer.controller.base";

@swagger.ApiTags("randomplayers")
@common.Controller("randomplayers")
export class RandomplayerController extends RandomplayerControllerBase {
  constructor(
    protected readonly service: RandomplayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
