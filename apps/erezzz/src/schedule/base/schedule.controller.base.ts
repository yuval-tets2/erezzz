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
import { ScheduleService } from "../schedule.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScheduleCreateInput } from "./ScheduleCreateInput";
import { ScheduleWhereInput } from "./ScheduleWhereInput";
import { ScheduleWhereUniqueInput } from "./ScheduleWhereUniqueInput";
import { ScheduleFindManyArgs } from "./ScheduleFindManyArgs";
import { ScheduleUpdateInput } from "./ScheduleUpdateInput";
import { Schedule } from "./Schedule";
import { MatchscoreFindManyArgs } from "../../matchscore/base/MatchscoreFindManyArgs";
import { Matchscore } from "../../matchscore/base/Matchscore";
import { MatchscoreWhereUniqueInput } from "../../matchscore/base/MatchscoreWhereUniqueInput";
import { ScoreFindManyArgs } from "../../score/base/ScoreFindManyArgs";
import { Score } from "../../score/base/Score";
import { ScoreWhereUniqueInput } from "../../score/base/ScoreWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScheduleControllerBase {
  constructor(
    protected readonly service: ScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Schedule })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ScheduleCreateInput): Promise<Schedule> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        dateOfPlay: true,
        idTeam1: true,
        idPlayer1: true,
        idTeam2: true,
        idPlayer2: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Schedule] })
  @ApiNestedQuery(ScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Schedule[]> {
    const args = plainToClass(ScheduleFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        dateOfPlay: true,
        idTeam1: true,
        idPlayer1: true,
        idTeam2: true,
        idPlayer2: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Schedule | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        dateOfPlay: true,
        idTeam1: true,
        idPlayer1: true,
        idTeam2: true,
        idPlayer2: true,
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
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ScheduleWhereUniqueInput,
    @common.Body() data: ScheduleUpdateInput
  ): Promise<Schedule | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          dateOfPlay: true,
          idTeam1: true,
          idPlayer1: true,
          idTeam2: true,
          idPlayer2: true,
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
  @swagger.ApiOkResponse({ type: Schedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Schedule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ScheduleWhereUniqueInput
  ): Promise<Schedule | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          dateOfPlay: true,
          idTeam1: true,
          idPlayer1: true,
          idTeam2: true,
          idPlayer2: true,
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
    @common.Param() params: ScheduleWhereUniqueInput
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
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  async connectMatchscore(
    @common.Param() params: ScheduleWhereUniqueInput,
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
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  async updateMatchscore(
    @common.Param() params: ScheduleWhereUniqueInput,
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
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  async disconnectMatchscore(
    @common.Param() params: ScheduleWhereUniqueInput,
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
    @common.Param() params: ScheduleWhereUniqueInput
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
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  async connectScores(
    @common.Param() params: ScheduleWhereUniqueInput,
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
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  async updateScores(
    @common.Param() params: ScheduleWhereUniqueInput,
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
    resource: "Schedule",
    action: "update",
    possession: "any",
  })
  async disconnectScores(
    @common.Param() params: ScheduleWhereUniqueInput,
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
}
