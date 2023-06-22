import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamCopyServiceBase } from "./base/teamCopy.service.base";

@Injectable()
export class TeamCopyService extends TeamCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
