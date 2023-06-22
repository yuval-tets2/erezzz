/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScoreWhereUniqueInput } from "../../score/base/ScoreWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ScoreUpdateManyWithoutSchedulesInput {
  @Field(() => [ScoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScoreWhereUniqueInput],
  })
  connect?: Array<ScoreWhereUniqueInput>;

  @Field(() => [ScoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScoreWhereUniqueInput],
  })
  disconnect?: Array<ScoreWhereUniqueInput>;

  @Field(() => [ScoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScoreWhereUniqueInput],
  })
  set?: Array<ScoreWhereUniqueInput>;
}

export { ScoreUpdateManyWithoutSchedulesInput as ScoreUpdateManyWithoutSchedulesInput };
