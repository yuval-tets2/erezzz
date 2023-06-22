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
import {
  IsInt,
  IsOptional,
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumCourseTeetypeTeeType } from "./EnumCourseTeetypeTeeType";
import { Type } from "class-transformer";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";

@InputType()
class CourseTeetypeUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  teeId?: number;

  @ApiProperty({
    required: false,
    enum: EnumCourseTeetypeTeeType,
  })
  @IsEnum(EnumCourseTeetypeTeeType)
  @IsOptional()
  @Field(() => EnumCourseTeetypeTeeType, {
    nullable: true,
  })
  teeType?: "MEN" | "SENIOR" | "LADIES";

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

  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput;
}

export { CourseTeetypeUpdateInput as CourseTeetypeUpdateInput };