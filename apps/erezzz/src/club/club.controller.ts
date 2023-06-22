import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClubService } from "./club.service";
import { ClubControllerBase } from "./base/club.controller.base";

@swagger.ApiTags("clubs")
@common.Controller("clubs")
export class ClubController extends ClubControllerBase {
  constructor(
    protected readonly service: ClubService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
