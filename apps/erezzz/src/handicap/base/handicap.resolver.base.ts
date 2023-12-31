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
import { CreateHandicapArgs } from "./CreateHandicapArgs";
import { UpdateHandicapArgs } from "./UpdateHandicapArgs";
import { DeleteHandicapArgs } from "./DeleteHandicapArgs";
import { HandicapCountArgs } from "./HandicapCountArgs";
import { HandicapFindManyArgs } from "./HandicapFindManyArgs";
import { HandicapFindUniqueArgs } from "./HandicapFindUniqueArgs";
import { Handicap } from "./Handicap";
import { HandicapService } from "../handicap.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Handicap)
export class HandicapResolverBase {
  constructor(
    protected readonly service: HandicapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Handicap",
    action: "read",
    possession: "any",
  })
  async _handicapsMeta(
    @graphql.Args() args: HandicapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Handicap])
  @nestAccessControl.UseRoles({
    resource: "Handicap",
    action: "read",
    possession: "any",
  })
  async handicaps(
    @graphql.Args() args: HandicapFindManyArgs
  ): Promise<Handicap[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Handicap, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Handicap",
    action: "read",
    possession: "own",
  })
  async handicap(
    @graphql.Args() args: HandicapFindUniqueArgs
  ): Promise<Handicap | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Handicap)
  @nestAccessControl.UseRoles({
    resource: "Handicap",
    action: "create",
    possession: "any",
  })
  async createHandicap(
    @graphql.Args() args: CreateHandicapArgs
  ): Promise<Handicap> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Handicap)
  @nestAccessControl.UseRoles({
    resource: "Handicap",
    action: "update",
    possession: "any",
  })
  async updateHandicap(
    @graphql.Args() args: UpdateHandicapArgs
  ): Promise<Handicap | null> {
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

  @graphql.Mutation(() => Handicap)
  @nestAccessControl.UseRoles({
    resource: "Handicap",
    action: "delete",
    possession: "any",
  })
  async deleteHandicap(
    @graphql.Args() args: DeleteHandicapArgs
  ): Promise<Handicap | null> {
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
}
