/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Schedule, Matchscore, Score } from "@prisma/client";

export class ScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ScheduleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleCountArgs>
  ): Promise<number> {
    return this.prisma.schedule.count(args);
  }

  async findMany<T extends Prisma.ScheduleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleFindManyArgs>
  ): Promise<Schedule[]> {
    return this.prisma.schedule.findMany(args);
  }
  async findOne<T extends Prisma.ScheduleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleFindUniqueArgs>
  ): Promise<Schedule | null> {
    return this.prisma.schedule.findUnique(args);
  }
  async create<T extends Prisma.ScheduleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleCreateArgs>
  ): Promise<Schedule> {
    return this.prisma.schedule.create<T>(args);
  }
  async update<T extends Prisma.ScheduleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleUpdateArgs>
  ): Promise<Schedule> {
    return this.prisma.schedule.update<T>(args);
  }
  async delete<T extends Prisma.ScheduleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleDeleteArgs>
  ): Promise<Schedule> {
    return this.prisma.schedule.delete(args);
  }

  async findMatchscore(
    parentId: number,
    args: Prisma.MatchscoreFindManyArgs
  ): Promise<Matchscore[]> {
    return this.prisma.schedule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .matchscore(args);
  }

  async findScores(
    parentId: number,
    args: Prisma.ScoreFindManyArgs
  ): Promise<Score[]> {
    return this.prisma.schedule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .scores(args);
  }
}
