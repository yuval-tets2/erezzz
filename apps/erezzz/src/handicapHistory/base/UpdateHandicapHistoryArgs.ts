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
import { HandicapHistoryWhereUniqueInput } from "./HandicapHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HandicapHistoryUpdateInput } from "./HandicapHistoryUpdateInput";

@ArgsType()
class UpdateHandicapHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => HandicapHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HandicapHistoryWhereUniqueInput)
  @Field(() => HandicapHistoryWhereUniqueInput, { nullable: false })
  where!: HandicapHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HandicapHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => HandicapHistoryUpdateInput)
  @Field(() => HandicapHistoryUpdateInput, { nullable: false })
  data!: HandicapHistoryUpdateInput;
}

export { UpdateHandicapHistoryArgs as UpdateHandicapHistoryArgs };
