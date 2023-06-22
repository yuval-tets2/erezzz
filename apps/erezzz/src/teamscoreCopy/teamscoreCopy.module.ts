import { Module } from "@nestjs/common";
import { TeamscoreCopyModuleBase } from "./base/teamscoreCopy.module.base";
import { TeamscoreCopyService } from "./teamscoreCopy.service";
import { TeamscoreCopyController } from "./teamscoreCopy.controller";
import { TeamscoreCopyResolver } from "./teamscoreCopy.resolver";

@Module({
  imports: [TeamscoreCopyModuleBase],
  controllers: [TeamscoreCopyController],
  providers: [TeamscoreCopyService, TeamscoreCopyResolver],
  exports: [TeamscoreCopyService],
})
export class TeamscoreCopyModule {}
