import { Module } from "@nestjs/common";
import { SeasonModuleBase } from "./base/season.module.base";
import { SeasonService } from "./season.service";
import { SeasonController } from "./season.controller";
import { SeasonResolver } from "./season.resolver";

@Module({
  imports: [SeasonModuleBase],
  controllers: [SeasonController],
  providers: [SeasonService, SeasonResolver],
  exports: [SeasonService],
})
export class SeasonModule {}
