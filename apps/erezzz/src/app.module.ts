import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { ClubModule } from "./club/club.module";
import { CourseModule } from "./course/course.module";
import { CourseRatingModule } from "./courseRating/courseRating.module";
import { CourseTeetypeModule } from "./courseTeetype/courseTeetype.module";
import { EmailLogModule } from "./emailLog/emailLog.module";
import { HandicapModule } from "./handicap/handicap.module";
import { HandicapHistoryModule } from "./handicapHistory/handicapHistory.module";
import { HoleModule } from "./hole/hole.module";
import { MatchscoreModule } from "./matchscore/matchscore.module";
import { MemberModule } from "./member/member.module";
import { RandomplayerModule } from "./randomplayer/randomplayer.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { ScoreModule } from "./score/score.module";
import { SeasonModule } from "./season/season.module";
import { SeasonCourseModule } from "./seasonCourse/seasonCourse.module";
import { TeamModule } from "./team/team.module";
import { TeamCopyModule } from "./teamCopy/teamCopy.module";
import { TeamscoreModule } from "./teamscore/teamscore.module";
import { TeamscoreCopyModule } from "./teamscoreCopy/teamscoreCopy.module";
import { TeeModule } from "./tee/tee.module";
import { TestscheduleModule } from "./testschedule/testschedule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ClubModule,
    CourseModule,
    CourseRatingModule,
    CourseTeetypeModule,
    EmailLogModule,
    HandicapModule,
    HandicapHistoryModule,
    HoleModule,
    MatchscoreModule,
    MemberModule,
    RandomplayerModule,
    ScheduleModule,
    ScoreModule,
    SeasonModule,
    SeasonCourseModule,
    TeamModule,
    TeamCopyModule,
    TeamscoreModule,
    TeamscoreCopyModule,
    TeeModule,
    TestscheduleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
