import { Module } from "@nestjs/common";
import { HandicapHistoryModuleBase } from "./base/handicapHistory.module.base";
import { HandicapHistoryService } from "./handicapHistory.service";
import { HandicapHistoryController } from "./handicapHistory.controller";
import { HandicapHistoryResolver } from "./handicapHistory.resolver";

@Module({
  imports: [HandicapHistoryModuleBase],
  controllers: [HandicapHistoryController],
  providers: [HandicapHistoryService, HandicapHistoryResolver],
  exports: [HandicapHistoryService],
})
export class HandicapHistoryModule {}
