import { Module } from "@nestjs/common";
import { CourseTeetypeModuleBase } from "./base/courseTeetype.module.base";
import { CourseTeetypeService } from "./courseTeetype.service";
import { CourseTeetypeController } from "./courseTeetype.controller";
import { CourseTeetypeResolver } from "./courseTeetype.resolver";

@Module({
  imports: [CourseTeetypeModuleBase],
  controllers: [CourseTeetypeController],
  providers: [CourseTeetypeService, CourseTeetypeResolver],
  exports: [CourseTeetypeService],
})
export class CourseTeetypeModule {}
