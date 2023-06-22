import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamscoreServiceBase } from "./base/teamscore.service.base";

@Injectable()
export class TeamscoreService extends TeamscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
