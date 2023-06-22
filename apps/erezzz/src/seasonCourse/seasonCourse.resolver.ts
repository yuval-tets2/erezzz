import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SeasonCourseResolverBase } from "./base/seasonCourse.resolver.base";
import { SeasonCourse } from "./base/SeasonCourse";
import { SeasonCourseService } from "./seasonCourse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SeasonCourse)
export class SeasonCourseResolver extends SeasonCourseResolverBase {
  constructor(
    protected readonly service: SeasonCourseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
