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
import { MatchscoreCreateNestedManyWithoutMembersInput } from "./MatchscoreCreateNestedManyWithoutMembersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { ScoreCreateNestedManyWithoutMembersInput } from "./ScoreCreateNestedManyWithoutMembersInput";
import { TeamCreateNestedManyWithoutMembersInput } from "./TeamCreateNestedManyWithoutMembersInput";
import { EnumMemberTee } from "./EnumMemberTee";

@InputType()
class MemberCreateInput {
  @ApiProperty({
    required: false,
    type: () => MatchscoreCreateNestedManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => MatchscoreCreateNestedManyWithoutMembersInput)
  @IsOptional()
  @Field(() => MatchscoreCreateNestedManyWithoutMembersInput, {
    nullable: true,
  })
  matchscore?: MatchscoreCreateNestedManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: () => ScoreCreateNestedManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => ScoreCreateNestedManyWithoutMembersInput)
  @IsOptional()
  @Field(() => ScoreCreateNestedManyWithoutMembersInput, {
    nullable: true,
  })
  scores?: ScoreCreateNestedManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: () => TeamCreateNestedManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => TeamCreateNestedManyWithoutMembersInput)
  @IsOptional()
  @Field(() => TeamCreateNestedManyWithoutMembersInput, {
    nullable: true,
  })
  team?: TeamCreateNestedManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lname?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fname?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  active!: string;

  @ApiProperty({
    required: true,
    enum: EnumMemberTee,
  })
  @IsEnum(EnumMemberTee)
  @Field(() => EnumMemberTee)
  tee!: "MEN" | "SENIOR" | "LADIES";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ghin!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { MemberCreateInput as MemberCreateInput };
