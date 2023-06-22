import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeamCopyResolverBase } from "./base/teamCopy.resolver.base";
import { TeamCopy } from "./base/TeamCopy";
import { TeamCopyService } from "./teamCopy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeamCopy)
export class TeamCopyResolver extends TeamCopyResolverBase {
  constructor(
    protected readonly service: TeamCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
