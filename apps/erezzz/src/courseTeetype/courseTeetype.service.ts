import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseTeetypeServiceBase } from "./base/courseTeetype.service.base";

@Injectable()
export class CourseTeetypeService extends CourseTeetypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
