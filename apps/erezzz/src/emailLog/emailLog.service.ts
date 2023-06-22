import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailLogServiceBase } from "./base/emailLog.service.base";

@Injectable()
export class EmailLogService extends EmailLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
