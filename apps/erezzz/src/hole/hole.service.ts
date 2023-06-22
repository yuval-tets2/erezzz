import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HoleServiceBase } from "./base/hole.service.base";

@Injectable()
export class HoleService extends HoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
