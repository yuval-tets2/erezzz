import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CourseTeetypeResolverBase } from "./base/courseTeetype.resolver.base";
import { CourseTeetype } from "./base/CourseTeetype";
import { CourseTeetypeService } from "./courseTeetype.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CourseTeetype)
export class CourseTeetypeResolver extends CourseTeetypeResolverBase {
  constructor(
    protected readonly service: CourseTeetypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
