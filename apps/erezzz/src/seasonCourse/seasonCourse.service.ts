import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeasonCourseServiceBase } from "./base/seasonCourse.service.base";

@Injectable()
export class SeasonCourseService extends SeasonCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
