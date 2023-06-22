import { Module } from "@nestjs/common";
import { TeamCopyModuleBase } from "./base/teamCopy.module.base";
import { TeamCopyService } from "./teamCopy.service";
import { TeamCopyController } from "./teamCopy.controller";
import { TeamCopyResolver } from "./teamCopy.resolver";

@Module({
  imports: [TeamCopyModuleBase],
  controllers: [TeamCopyController],
  providers: [TeamCopyService, TeamCopyResolver],
  exports: [TeamCopyService],
})
export class TeamCopyModule {}
