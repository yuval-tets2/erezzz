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
import { SeasonCourseWhereUniqueInput } from "./SeasonCourseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SeasonCourseUpdateInput } from "./SeasonCourseUpdateInput";

@ArgsType()
class UpdateSeasonCourseArgs {
  @ApiProperty({
    required: true,
    type: () => SeasonCourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SeasonCourseWhereUniqueInput)
  @Field(() => SeasonCourseWhereUniqueInput, { nullable: false })
  where!: SeasonCourseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SeasonCourseUpdateInput,
  })
  @ValidateNested()
  @Type(() => SeasonCourseUpdateInput)
  @Field(() => SeasonCourseUpdateInput, { nullable: false })
  data!: SeasonCourseUpdateInput;
}

export { UpdateSeasonCourseArgs as UpdateSeasonCourseArgs };