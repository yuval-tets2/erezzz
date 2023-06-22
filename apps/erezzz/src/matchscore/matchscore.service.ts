import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatchscoreServiceBase } from "./base/matchscore.service.base";

@Injectable()
export class MatchscoreService extends MatchscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
