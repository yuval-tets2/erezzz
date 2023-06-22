import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HandicapServiceBase } from "./base/handicap.service.base";

@Injectable()
export class HandicapService extends HandicapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
