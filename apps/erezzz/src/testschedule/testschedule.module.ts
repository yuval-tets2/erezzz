import { Module } from "@nestjs/common";
import { TestscheduleModuleBase } from "./base/testschedule.module.base";
import { TestscheduleService } from "./testschedule.service";
import { TestscheduleController } from "./testschedule.controller";
import { TestscheduleResolver } from "./testschedule.resolver";

@Module({
  imports: [TestscheduleModuleBase],
  controllers: [TestscheduleController],
  providers: [TestscheduleService, TestscheduleResolver],
  exports: [TestscheduleService],
})
export class TestscheduleModule {}
