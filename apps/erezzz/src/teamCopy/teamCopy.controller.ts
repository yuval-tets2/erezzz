import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeamCopyService } from "./teamCopy.service";
import { TeamCopyControllerBase } from "./base/teamCopy.controller.base";

@swagger.ApiTags("teamCopies")
@common.Controller("teamCopies")
export class TeamCopyController extends TeamCopyControllerBase {
  constructor(
    protected readonly service: TeamCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
