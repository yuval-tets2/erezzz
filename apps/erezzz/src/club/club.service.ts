import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClubServiceBase } from "./base/club.service.base";

@Injectable()
export class ClubService extends ClubServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
