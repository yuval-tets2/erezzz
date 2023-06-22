import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseRatingServiceBase } from "./base/courseRating.service.base";

@Injectable()
export class CourseRatingService extends CourseRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
