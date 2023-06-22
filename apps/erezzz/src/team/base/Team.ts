/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Member } from "../../member/base/Member";
import { Season } from "../../season/base/Season";
import { Teamscore } from "../../teamscore/base/Teamscore";

@ObjectType()
class Team {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  id!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  teamId!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  playerRank!: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  sub!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Member,
  })
  @ValidateNested()
  @Type(() => Member)
  @IsOptional()
  members?: Member | null;

  @ApiProperty({
    required: false,
    type: () => Season,
  })
  @ValidateNested()
  @Type(() => Season)
  @IsOptional()
  season?: Season | null;

  @ApiProperty({
    required: false,
    type: () => [Teamscore],
  })
  @ValidateNested()
  @Type(() => Teamscore)
  @IsOptional()
  teamscore?: Array<Teamscore>;
}

export { Team as Team };
