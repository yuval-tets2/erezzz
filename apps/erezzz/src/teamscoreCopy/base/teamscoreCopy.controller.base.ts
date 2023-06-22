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
import { TeamscoreCopyService } from "../teamscoreCopy.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamscoreCopyCreateInput } from "./TeamscoreCopyCreateInput";
import { TeamscoreCopyWhereInput } from "./TeamscoreCopyWhereInput";
import { TeamscoreCopyWhereUniqueInput } from "./TeamscoreCopyWhereUniqueInput";
import { TeamscoreCopyFindManyArgs } from "./TeamscoreCopyFindManyArgs";
import { TeamscoreCopyUpdateInput } from "./TeamscoreCopyUpdateInput";
import { TeamscoreCopy } from "./TeamscoreCopy";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamscoreCopyControllerBase {
  constructor(
    protected readonly service: TeamscoreCopyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TeamscoreCopy })
  @nestAccessControl.UseRoles({
    resource: "TeamscoreCopy",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: TeamscoreCopyCreateInput
  ): Promise<TeamscoreCopy> {
    return await this.service.create({
      data: data,
      select: {
        updatedAt: true,
        id: true,
        teamkey: true,
        teamIid: true,
        dateOfPlay: true,
        points: true,
        createdAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TeamscoreCopy] })
  @ApiNestedQuery(TeamscoreCopyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TeamscoreCopy",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<TeamscoreCopy[]> {
    const args = plainToClass(TeamscoreCopyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        updatedAt: true,
        id: true,
        teamkey: true,
        teamIid: true,
        dateOfPlay: true,
        points: true,
        createdAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TeamscoreCopy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TeamscoreCopy",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TeamscoreCopyWhereUniqueInput
  ): Promise<TeamscoreCopy | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        updatedAt: true,
        id: true,
        teamkey: true,
        teamIid: true,
        dateOfPlay: true,
        points: true,
        createdAt: true,
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
  @swagger.ApiOkResponse({ type: TeamscoreCopy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TeamscoreCopy",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TeamscoreCopyWhereUniqueInput,
    @common.Body() data: TeamscoreCopyUpdateInput
  ): Promise<TeamscoreCopy | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          updatedAt: true,
          id: true,
          teamkey: true,
          teamIid: true,
          dateOfPlay: true,
          points: true,
          createdAt: true,
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
  @swagger.ApiOkResponse({ type: TeamscoreCopy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TeamscoreCopy",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TeamscoreCopyWhereUniqueInput
  ): Promise<TeamscoreCopy | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          updatedAt: true,
          id: true,
          teamkey: true,
          teamIid: true,
          dateOfPlay: true,
          points: true,
          createdAt: true,
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