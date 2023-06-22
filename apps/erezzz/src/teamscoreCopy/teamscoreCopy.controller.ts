import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeamscoreCopyService } from "./teamscoreCopy.service";
import { TeamscoreCopyControllerBase } from "./base/teamscoreCopy.controller.base";

@swagger.ApiTags("teamscoreCopies")
@common.Controller("teamscoreCopies")
export class TeamscoreCopyController extends TeamscoreCopyControllerBase {
  constructor(
    protected readonly service: TeamscoreCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
