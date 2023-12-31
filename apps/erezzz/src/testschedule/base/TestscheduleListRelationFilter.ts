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
import { TestscheduleWhereInput } from "./TestscheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TestscheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TestscheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => TestscheduleWhereInput)
  @IsOptional()
  @Field(() => TestscheduleWhereInput, {
    nullable: true,
  })
  every?: TestscheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestscheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => TestscheduleWhereInput)
  @IsOptional()
  @Field(() => TestscheduleWhereInput, {
    nullable: true,
  })
  some?: TestscheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestscheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => TestscheduleWhereInput)
  @IsOptional()
  @Field(() => TestscheduleWhereInput, {
    nullable: true,
  })
  none?: TestscheduleWhereInput;
}
export { TestscheduleListRelationFilter as TestscheduleListRelationFilter };
