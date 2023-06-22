import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeamscoreCopyResolverBase } from "./base/teamscoreCopy.resolver.base";
import { TeamscoreCopy } from "./base/TeamscoreCopy";
import { TeamscoreCopyService } from "./teamscoreCopy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeamscoreCopy)
export class TeamscoreCopyResolver extends TeamscoreCopyResolverBase {
  constructor(
    protected readonly service: TeamscoreCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
