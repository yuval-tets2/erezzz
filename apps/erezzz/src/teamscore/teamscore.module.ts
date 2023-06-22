import { Module } from "@nestjs/common";
import { TeamscoreModuleBase } from "./base/teamscore.module.base";
import { TeamscoreService } from "./teamscore.service";
import { TeamscoreController } from "./teamscore.controller";
import { TeamscoreResolver } from "./teamscore.resolver";

@Module({
  imports: [TeamscoreModuleBase],
  controllers: [TeamscoreController],
  providers: [TeamscoreService, TeamscoreResolver],
  exports: [TeamscoreService],
})
export class TeamscoreModule {}
