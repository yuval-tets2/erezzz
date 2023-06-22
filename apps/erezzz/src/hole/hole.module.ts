import { Module } from "@nestjs/common";
import { HoleModuleBase } from "./base/hole.module.base";
import { HoleService } from "./hole.service";
import { HoleController } from "./hole.controller";
import { HoleResolver } from "./hole.resolver";

@Module({
  imports: [HoleModuleBase],
  controllers: [HoleController],
  providers: [HoleService, HoleResolver],
  exports: [HoleService],
})
export class HoleModule {}
