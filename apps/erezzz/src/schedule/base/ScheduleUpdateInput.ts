/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MatchscoreUpdateManyWithoutSchedulesInput } from "./MatchscoreUpdateManyWithoutSchedulesInput";
import { ValidateNested, IsOptional, IsDate, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ScoreUpdateManyWithoutSchedulesInput } from "./ScoreUpdateManyWithoutSchedulesInput";

@InputType()
class ScheduleUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MatchscoreUpdateManyWithoutSchedulesInput,
  })
  @ValidateNested()
  @Type(() => MatchscoreUpdateManyWithoutSchedulesInput)
  @IsOptional()
  @Field(() => MatchscoreUpdateManyWithoutSchedulesInput, {
    nullable: true,
  })
  matchscore?: MatchscoreUpdateManyWithoutSchedulesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfPlay?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idTeam1?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idPlayer1?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idTeam2?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  idPlayer2?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date;

  @ApiProperty({
    required: false,
    type: () => ScoreUpdateManyWithoutSchedulesInput,
  })
  @ValidateNested()
  @Type(() => ScoreUpdateManyWithoutSchedulesInput)
  @IsOptional()
  @Field(() => ScoreUpdateManyWithoutSchedulesInput, {
    nullable: true,
  })
  scores?: ScoreUpdateManyWithoutSchedulesInput;
}

export { ScheduleUpdateInput as ScheduleUpdateInput };
