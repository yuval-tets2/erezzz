/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCourseRatingArgs } from "./CreateCourseRatingArgs";
import { UpdateCourseRatingArgs } from "./UpdateCourseRatingArgs";
import { DeleteCourseRatingArgs } from "./DeleteCourseRatingArgs";
import { CourseRatingCountArgs } from "./CourseRatingCountArgs";
import { CourseRatingFindManyArgs } from "./CourseRatingFindManyArgs";
import { CourseRatingFindUniqueArgs } from "./CourseRatingFindUniqueArgs";
import { CourseRating } from "./CourseRating";
import { Course } from "../../course/base/Course";
import { CourseRatingService } from "../courseRating.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CourseRating)
export class CourseRatingResolverBase {
  constructor(
    protected readonly service: CourseRatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "read",
    possession: "any",
  })
  async _courseRatingsMeta(
    @graphql.Args() args: CourseRatingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CourseRating])
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "read",
    possession: "any",
  })
  async courseRatings(
    @graphql.Args() args: CourseRatingFindManyArgs
  ): Promise<CourseRating[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CourseRating, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "read",
    possession: "own",
  })
  async courseRating(
    @graphql.Args() args: CourseRatingFindUniqueArgs
  ): Promise<CourseRating | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CourseRating)
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "create",
    possession: "any",
  })
  async createCourseRating(
    @graphql.Args() args: CreateCourseRatingArgs
  ): Promise<CourseRating> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        course: {
          connect: args.data.course,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CourseRating)
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "update",
    possession: "any",
  })
  async updateCourseRating(
    @graphql.Args() args: UpdateCourseRatingArgs
  ): Promise<CourseRating | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          course: {
            connect: args.data.course,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CourseRating)
  @nestAccessControl.UseRoles({
    resource: "CourseRating",
    action: "delete",
    possession: "any",
  })
  async deleteCourseRating(
    @graphql.Args() args: DeleteCourseRatingArgs
  ): Promise<CourseRating | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourse(
    @graphql.Parent() parent: CourseRating
  ): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
