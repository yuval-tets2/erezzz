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
import { CreateClubArgs } from "./CreateClubArgs";
import { UpdateClubArgs } from "./UpdateClubArgs";
import { DeleteClubArgs } from "./DeleteClubArgs";
import { ClubCountArgs } from "./ClubCountArgs";
import { ClubFindManyArgs } from "./ClubFindManyArgs";
import { ClubFindUniqueArgs } from "./ClubFindUniqueArgs";
import { Club } from "./Club";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { ClubService } from "../club.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Club)
export class ClubResolverBase {
  constructor(
    protected readonly service: ClubService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "read",
    possession: "any",
  })
  async _clubsMeta(
    @graphql.Args() args: ClubCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Club])
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "read",
    possession: "any",
  })
  async clubs(@graphql.Args() args: ClubFindManyArgs): Promise<Club[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Club, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "read",
    possession: "own",
  })
  async club(@graphql.Args() args: ClubFindUniqueArgs): Promise<Club | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Club)
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "create",
    possession: "any",
  })
  async createClub(@graphql.Args() args: CreateClubArgs): Promise<Club> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Club)
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "update",
    possession: "any",
  })
  async updateClub(@graphql.Args() args: UpdateClubArgs): Promise<Club | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Club)
  @nestAccessControl.UseRoles({
    resource: "Club",
    action: "delete",
    possession: "any",
  })
  async deleteClub(@graphql.Args() args: DeleteClubArgs): Promise<Club | null> {
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
  @graphql.ResolveField(() => [Course], { name: "course" })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async resolveFieldCourse(
    @graphql.Parent() parent: Club,
    @graphql.Args() args: CourseFindManyArgs
  ): Promise<Course[]> {
    const results = await this.service.findCourse(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}