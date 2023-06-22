import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeamscoreResolverBase } from "./base/teamscore.resolver.base";
import { Teamscore } from "./base/Teamscore";
import { TeamscoreService } from "./teamscore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Teamscore)
export class TeamscoreResolver extends TeamscoreResolverBase {
  constructor(
    protected readonly service: TeamscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
