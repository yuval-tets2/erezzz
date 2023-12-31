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
import { TeamscoreService } from "../teamscore.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamscoreCreateInput } from "./TeamscoreCreateInput";
import { TeamscoreWhereInput } from "./TeamscoreWhereInput";
import { TeamscoreWhereUniqueInput } from "./TeamscoreWhereUniqueInput";
import { TeamscoreFindManyArgs } from "./TeamscoreFindManyArgs";
import { TeamscoreUpdateInput } from "./TeamscoreUpdateInput";
import { Teamscore } from "./Teamscore";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamscoreControllerBase {
  constructor(
    protected readonly service: TeamscoreService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Teamscore })
  @nestAccessControl.UseRoles({
    resource: "Teamscore",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TeamscoreCreateInput): Promise<Teamscore> {
    return await this.service.create({
      data: {
        ...data,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,
      },
      select: {
        id: true,
        teamIid: true,
        dateOfPlay: true,
        points: true,
        createdAt: true,
        updatedAt: true,

        team: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Teamscore] })
  @ApiNestedQuery(TeamscoreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Teamscore",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Teamscore[]> {
    const args = plainToClass(TeamscoreFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        teamIid: true,
        dateOfPlay: true,
        points: true,
        createdAt: true,
        updatedAt: true,

        team: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Teamscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Teamscore",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TeamscoreWhereUniqueInput
  ): Promise<Teamscore | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        teamIid: true,
        dateOfPlay: true,
        points: true,
        createdAt: true,
        updatedAt: true,

        team: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Teamscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Teamscore",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TeamscoreWhereUniqueInput,
    @common.Body() data: TeamscoreUpdateInput
  ): Promise<Teamscore | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,
        },
        select: {
          id: true,
          teamIid: true,
          dateOfPlay: true,
          points: true,
          createdAt: true,
          updatedAt: true,

          team: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Teamscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Teamscore",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TeamscoreWhereUniqueInput
  ): Promise<Teamscore | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          teamIid: true,
          dateOfPlay: true,
          points: true,
          createdAt: true,
          updatedAt: true,

          team: {
            select: {
              id: true,
            },
          },
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
}
