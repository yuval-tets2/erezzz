import { Module } from "@nestjs/common";
import { HandicapModuleBase } from "./base/handicap.module.base";
import { HandicapService } from "./handicap.service";
import { HandicapController } from "./handicap.controller";
import { HandicapResolver } from "./handicap.resolver";

@Module({
  imports: [HandicapModuleBase],
  controllers: [HandicapController],
  providers: [HandicapService, HandicapResolver],
  exports: [HandicapService],
})
export class HandicapModule {}
