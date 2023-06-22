/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MemberService } from "../member.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MemberCreateInput } from "./MemberCreateInput";
import { MemberWhereInput } from "./MemberWhereInput";
import { MemberWhereUniqueInput } from "./MemberWhereUniqueInput";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberUpdateInput } from "./MemberUpdateInput";
import { Member } from "./Member";
import { MatchscoreFindManyArgs } from "../../matchscore/base/MatchscoreFindManyArgs";
import { Matchscore } from "../../matchscore/base/Matchscore";
import { MatchscoreWhereUniqueInput } from "../../matchscore/base/MatchscoreWhereUniqueInput";
import { ScoreFindManyArgs } from "../../score/base/ScoreFindManyArgs";
import { Score } from "../../score/base/Score";
import { ScoreWhereUniqueInput } from "../../score/base/ScoreWhereUniqueInput";
import { TeamFindManyArgs } from "../../team/base/TeamFindManyArgs";
import { Team } from "../../team/base/Team";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MemberControllerBase {
  constructor(
    protected readonly service: MemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Member })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MemberCreateInput): Promise<Member> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        lname: true,
        fname: true,
        email: true,
        active: true,
        tee: true,
        ghin: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Member] })
  @ApiNestedQuery(MemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Member[]> {
    const args = plainToClass(MemberFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        lname: true,
        fname: true,
        email: true,
        active: true,
        tee: true,
        ghin: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        lname: true,
        fname: true,
        email: true,
        active: true,
        tee: true,
        ghin: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() data: MemberUpdateInput
  ): Promise<Member | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          lname: true,
          fname: true,
          email: true,
          active: true,
          tee: true,
          ghin: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          lname: true,
          fname: true,
          email: true,
          active: true,
          tee: true,
          ghin: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/matchscore")
  @ApiNestedQuery(MatchscoreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Matchscore",
    action: "read",
    possession: "any",
  })
  async findManyMatchscore(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Matchscore[]> {
    const query = plainToClass(MatchscoreFindManyArgs, request.query);
    const results = await this.service.findMatchscore(params.id, {
      ...query,
      select: {
        id: true,
        teamId: true,
        playerPoints: true,
        createdAt: true,
        updatedAt: true,

        members: {
          select: {
            id: true,
          },
        },

        schedule: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/matchscore")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectMatchscore(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: MatchscoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      matchscore: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/matchscore")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateMatchscore(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: MatchscoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      matchscore: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/matchscore")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectMatchscore(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: MatchscoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      matchscore: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/scores")
  @ApiNestedQuery(ScoreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Score",
    action: "read",
    possession: "any",
  })
  async findManyScores(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Score[]> {
    const query = plainToClass(ScoreFindManyArgs, request.query);
    const results = await this.service.findScores(params.id, {
      ...query,
      select: {
        scoreDate: true,
        id: true,
        lastname: true,
        firstname: true,
        h1: true,
        h2: true,
        h3: true,
        h4: true,
        h5: true,
        h6: true,
        h7: true,
        h8: true,
        h9: true,
        front: true,
        fhndcp: true,
        fnet: true,
        ninePlayed: true,
        press: true,
        h10: true,
        h11: true,
        h12: true,
        h13: true,
        h14: true,
        h15: true,
        h16: true,
        h17: true,
        h18: true,
        back: true,
        bhndcp: true,
        bnet: true,
        createdAt: true,
        updatedAt: true,

        members: {
          select: {
            id: true,
          },
        },

        schedule: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/scores")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectScores(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: ScoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scores: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scores")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateScores(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: ScoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scores: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scores")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectScores(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: ScoreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scores: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/team")
  @ApiNestedQuery(TeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async findManyTeam(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Team[]> {
    const query = plainToClass(TeamFindManyArgs, request.query);
    const results = await this.service.findTeam(params.id, {
      ...query,
      select: {
        id: true,
        teamId: true,
        playerRank: true,
        sub: true,
        createdAt: true,
        updatedAt: true,

        members: {
          select: {
            id: true,
          },
        },

        season: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/team")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectTeam(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      team: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/team")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateTeam(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      team: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/team")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectTeam(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: TeamWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      team: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
