import { Module } from "@nestjs/common";
import { MatchscoreModuleBase } from "./base/matchscore.module.base";
import { MatchscoreService } from "./matchscore.service";
import { MatchscoreController } from "./matchscore.controller";
import { MatchscoreResolver } from "./matchscore.resolver";

@Module({
  imports: [MatchscoreModuleBase],
  controllers: [MatchscoreController],
  providers: [MatchscoreService, MatchscoreResolver],
  exports: [MatchscoreService],
})
export class MatchscoreModule {}
