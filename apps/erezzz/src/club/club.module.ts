import { Module } from "@nestjs/common";
import { ClubModuleBase } from "./base/club.module.base";
import { ClubService } from "./club.service";
import { ClubController } from "./club.controller";
import { ClubResolver } from "./club.resolver";

@Module({
  imports: [ClubModuleBase],
  controllers: [ClubController],
  providers: [ClubService, ClubResolver],
  exports: [ClubService],
})
export class ClubModule {}
