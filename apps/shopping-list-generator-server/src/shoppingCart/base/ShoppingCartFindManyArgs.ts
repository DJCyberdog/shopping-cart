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
import { ShoppingCartWhereInput } from "./ShoppingCartWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ShoppingCartOrderByInput } from "./ShoppingCartOrderByInput";

@ArgsType()
class ShoppingCartFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ShoppingCartWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ShoppingCartWhereInput, { nullable: true })
  @Type(() => ShoppingCartWhereInput)
  where?: ShoppingCartWhereInput;

  @ApiProperty({
    required: false,
    type: [ShoppingCartOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ShoppingCartOrderByInput], { nullable: true })
  @Type(() => ShoppingCartOrderByInput)
  orderBy?: Array<ShoppingCartOrderByInput>;

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

export { ShoppingCartFindManyArgs as ShoppingCartFindManyArgs };
