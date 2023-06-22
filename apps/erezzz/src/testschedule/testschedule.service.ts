import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestscheduleServiceBase } from "./base/testschedule.service.base";

@Injectable()
export class TestscheduleService extends TestscheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
