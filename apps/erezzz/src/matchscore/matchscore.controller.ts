import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MatchscoreService } from "./matchscore.service";
import { MatchscoreControllerBase } from "./base/matchscore.controller.base";

@swagger.ApiTags("matchscores")
@common.Controller("matchscores")
export class MatchscoreController extends MatchscoreControllerBase {
  constructor(
    protected readonly service: MatchscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
