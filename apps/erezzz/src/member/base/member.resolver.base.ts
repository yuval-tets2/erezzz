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
import { CreateMemberArgs } from "./CreateMemberArgs";
import { UpdateMemberArgs } from "./UpdateMemberArgs";
import { DeleteMemberArgs } from "./DeleteMemberArgs";
import { MemberCountArgs } from "./MemberCountArgs";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberFindUniqueArgs } from "./MemberFindUniqueArgs";
import { Member } from "./Member";
import { MatchscoreFindManyArgs } from "../../matchscore/base/MatchscoreFindManyArgs";
import { Matchscore } from "../../matchscore/base/Matchscore";
import { ScoreFindManyArgs } from "../../score/base/ScoreFindManyArgs";
import { Score } from "../../score/base/Score";
import { TeamFindManyArgs } from "../../team/base/TeamFindManyArgs";
import { Team } from "../../team/base/Team";
import { MemberService } from "../member.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Member)
export class MemberResolverBase {
  constructor(
    protected readonly service: MemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  async _membersMeta(
    @graphql.Args() args: MemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Member])
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  async members(@graphql.Args() args: MemberFindManyArgs): Promise<Member[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Member, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "own",
  })
  async member(
    @graphql.Args() args: MemberFindUniqueArgs
  ): Promise<Member | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Member)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "create",
    possession: "any",
  })
  async createMember(@graphql.Args() args: CreateMemberArgs): Promise<Member> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Member)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateMember(
    @graphql.Args() args: UpdateMemberArgs
  ): Promise<Member | null> {
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

  @graphql.Mutation(() => Member)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "delete",
    possession: "any",
  })
  async deleteMember(
    @graphql.Args() args: DeleteMemberArgs
  ): Promise<Member | null> {
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
  @graphql.ResolveField(() => [Matchscore], { name: "matchscore" })
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "read",
    possession: "any",
  })
  async resolveFieldMatchscore(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: MatchscoreFindManyArgs
  ): Promise<Matchscore[]> {
    const results = await this.service.findMatchscore(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Score], { name: "scores" })
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "any",
  })
  async resolveFieldScores(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: ScoreFindManyArgs
  ): Promise<Score[]> {
    const results = await this.service.findScores(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Team], { name: "team" })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async resolveFieldTeam(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: TeamFindManyArgs
  ): Promise<Team[]> {
    const results = await this.service.findTeam(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
