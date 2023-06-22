import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RandomplayerServiceBase } from "./base/randomplayer.service.base";

@Injectable()
export class RandomplayerService extends RandomplayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
