import { Module } from "@nestjs/common";
import { RandomplayerModuleBase } from "./base/randomplayer.module.base";
import { RandomplayerService } from "./randomplayer.service";
import { RandomplayerController } from "./randomplayer.controller";
import { RandomplayerResolver } from "./randomplayer.resolver";

@Module({
  imports: [RandomplayerModuleBase],
  controllers: [RandomplayerController],
  providers: [RandomplayerService, RandomplayerResolver],
  exports: [RandomplayerService],
})
export class RandomplayerModule {}
