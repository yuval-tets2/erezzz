import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CourseRatingResolverBase } from "./base/courseRating.resolver.base";
import { CourseRating } from "./base/CourseRating";
import { CourseRatingService } from "./courseRating.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CourseRating)
export class CourseRatingResolver extends CourseRatingResolverBase {
  constructor(
    protected readonly service: CourseRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
