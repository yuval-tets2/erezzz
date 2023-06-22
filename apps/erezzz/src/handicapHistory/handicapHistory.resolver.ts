import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HandicapHistoryResolverBase } from "./base/handicapHistory.resolver.base";
import { HandicapHistory } from "./base/HandicapHistory";
import { HandicapHistoryService } from "./handicapHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HandicapHistory)
export class HandicapHistoryResolver extends HandicapHistoryResolverBase {
  constructor(
    protected readonly service: HandicapHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
