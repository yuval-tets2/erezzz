import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HandicapHistoryServiceBase } from "./base/handicapHistory.service.base";

@Injectable()
export class HandicapHistoryService extends HandicapHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
