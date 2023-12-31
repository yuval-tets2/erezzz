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
import { TestscheduleWhereUniqueInput } from "./TestscheduleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TestscheduleUpdateInput } from "./TestscheduleUpdateInput";

@ArgsType()
class UpdateTestscheduleArgs {
  @ApiProperty({
    required: true,
    type: () => TestscheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TestscheduleWhereUniqueInput)
  @Field(() => TestscheduleWhereUniqueInput, { nullable: false })
  where!: TestscheduleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TestscheduleUpdateInput,
  })
  @ValidateNested()
  @Type(() => TestscheduleUpdateInput)
  @Field(() => TestscheduleUpdateInput, { nullable: false })
  data!: TestscheduleUpdateInput;
}

export { UpdateTestscheduleArgs as UpdateTestscheduleArgs };
