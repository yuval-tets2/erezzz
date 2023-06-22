import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeamscoreService } from "./teamscore.service";
import { TeamscoreControllerBase } from "./base/teamscore.controller.base";

@swagger.ApiTags("teamscores")
@common.Controller("teamscores")
export class TeamscoreController extends TeamscoreControllerBase {
  constructor(
    protected readonly service: TeamscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
