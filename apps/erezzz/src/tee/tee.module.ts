import { Module } from "@nestjs/common";
import { TeeModuleBase } from "./base/tee.module.base";
import { TeeService } from "./tee.service";
import { TeeController } from "./tee.controller";
import { TeeResolver } from "./tee.resolver";

@Module({
  imports: [TeeModuleBase],
  controllers: [TeeController],
  providers: [TeeService, TeeResolver],
  exports: [TeeService],
})
export class TeeModule {}
