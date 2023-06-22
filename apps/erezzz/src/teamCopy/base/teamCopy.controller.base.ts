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
import { TeamCopyService } from "../teamCopy.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamCopyCreateInput } from "./TeamCopyCreateInput";
import { TeamCopyWhereInput } from "./TeamCopyWhereInput";
import { TeamCopyWhereUniqueInput } from "./TeamCopyWhereUniqueInput";
import { TeamCopyFindManyArgs } from "./TeamCopyFindManyArgs";
import { TeamCopyUpdateInput } from "./TeamCopyUpdateInput";
import { TeamCopy } from "./TeamCopy";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamCopyControllerBase {
  constructor(
    protected readonly service: TeamCopyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TeamCopy })
  @nestAccessControl.UseRoles({
    resource: "TeamCopy",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TeamCopyCreateInput): Promise<TeamCopy> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        seasonId: true,
        teamId: true,
        playerId: true,
        playerRank: true,
        sub: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TeamCopy] })
  @ApiNestedQuery(TeamCopyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TeamCopy",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<TeamCopy[]> {
    const args = plainToClass(TeamCopyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        seasonId: true,
        teamId: true,
        playerId: true,
        playerRank: true,
        sub: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TeamCopy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TeamCopy",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TeamCopyWhereUniqueInput
  ): Promise<TeamCopy | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        seasonId: true,
        teamId: true,
        playerId: true,
        playerRank: true,
        sub: true,
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
  @swagger.ApiOkResponse({ type: TeamCopy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TeamCopy",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TeamCopyWhereUniqueInput,
    @common.Body() data: TeamCopyUpdateInput
  ): Promise<TeamCopy | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          seasonId: true,
          teamId: true,
          playerId: true,
          playerRank: true,
          sub: true,
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
  @swagger.ApiOkResponse({ type: TeamCopy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TeamCopy",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TeamCopyWhereUniqueInput
  ): Promise<TeamCopy | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          seasonId: true,
          teamId: true,
          playerId: true,
          playerRank: true,
          sub: true,
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
}
