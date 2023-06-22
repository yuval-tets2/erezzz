import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MatchscoreResolverBase } from "./base/matchscore.resolver.base";
import { Matchscore } from "./base/Matchscore";
import { MatchscoreService } from "./matchscore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Matchscore)
export class MatchscoreResolver extends MatchscoreResolverBase {
  constructor(
    protected readonly service: MatchscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
