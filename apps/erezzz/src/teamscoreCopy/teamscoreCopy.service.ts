import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamscoreCopyServiceBase } from "./base/teamscoreCopy.service.base";

@Injectable()
export class TeamscoreCopyService extends TeamscoreCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
