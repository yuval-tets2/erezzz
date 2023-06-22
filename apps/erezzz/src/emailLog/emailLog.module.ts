import { Module } from "@nestjs/common";
import { EmailLogModuleBase } from "./base/emailLog.module.base";
import { EmailLogService } from "./emailLog.service";
import { EmailLogController } from "./emailLog.controller";
import { EmailLogResolver } from "./emailLog.resolver";

@Module({
  imports: [EmailLogModuleBase],
  controllers: [EmailLogController],
  providers: [EmailLogService, EmailLogResolver],
  exports: [EmailLogService],
})
export class EmailLogModule {}
