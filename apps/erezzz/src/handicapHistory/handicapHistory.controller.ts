import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HandicapHistoryService } from "./handicapHistory.service";
import { HandicapHistoryControllerBase } from "./base/handicapHistory.controller.base";

@swagger.ApiTags("handicapHistories")
@common.Controller("handicapHistories")
export class HandicapHistoryController extends HandicapHistoryControllerBase {
  constructor(
    protected readonly service: HandicapHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
