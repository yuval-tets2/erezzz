import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RandomplayerResolverBase } from "./base/randomplayer.resolver.base";
import { Randomplayer } from "./base/Randomplayer";
import { RandomplayerService } from "./randomplayer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Randomplayer)
export class RandomplayerResolver extends RandomplayerResolverBase {
  constructor(
    protected readonly service: RandomplayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
