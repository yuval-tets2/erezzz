/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RandomplayerWhereInput } from "./RandomplayerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RandomplayerOrderByInput } from "./RandomplayerOrderByInput";

@ArgsType()
class RandomplayerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RandomplayerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RandomplayerWhereInput, { nullable: true })
  @Type(() => RandomplayerWhereInput)
  where?: RandomplayerWhereInput;

  @ApiProperty({
    required: false,
    type: [RandomplayerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RandomplayerOrderByInput], { nullable: true })
  @Type(() => RandomplayerOrderByInput)
  orderBy?: Array<RandomplayerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RandomplayerFindManyArgs as RandomplayerFindManyArgs };
