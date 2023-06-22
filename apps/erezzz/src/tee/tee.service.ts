import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeeServiceBase } from "./base/tee.service.base";

@Injectable()
export class TeeService extends TeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
