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
import { IsInt, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MemberWhereUniqueInput } from "../../member/base/MemberWhereUniqueInput";
import { SeasonWhereUniqueInput } from "../../season/base/SeasonWhereUniqueInput";
import { TeamscoreCreateNestedManyWithoutTeamsInput } from "./TeamscoreCreateNestedManyWithoutTeamsInput";

@InputType()
class TeamCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  teamId?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  playerRank?: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  sub!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => MemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MemberWhereUniqueInput)
  @IsOptional()
  @Field(() => MemberWhereUniqueInput, {
    nullable: true,
  })
  members?: MemberWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SeasonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SeasonWhereUniqueInput)
  @IsOptional()
  @Field(() => SeasonWhereUniqueInput, {
    nullable: true,
  })
  season?: SeasonWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TeamscoreCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => TeamscoreCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => TeamscoreCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  teamscore?: TeamscoreCreateNestedManyWithoutTeamsInput;
}

export { TeamCreateInput as TeamCreateInput };