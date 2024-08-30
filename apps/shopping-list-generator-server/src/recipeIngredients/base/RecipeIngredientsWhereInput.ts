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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IngredientsWhereUniqueInput } from "../../ingredients/base/IngredientsWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RecipesWhereUniqueInput } from "../../recipes/base/RecipesWhereUniqueInput";

@InputType()
class RecipeIngredientsWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => IngredientsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IngredientsWhereUniqueInput)
  @IsOptional()
  @Field(() => IngredientsWhereUniqueInput, {
    nullable: true,
  })
  ingredient?: IngredientsWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  quantity?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RecipesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecipesWhereUniqueInput)
  @IsOptional()
  @Field(() => RecipesWhereUniqueInput, {
    nullable: true,
  })
  recipe?: RecipesWhereUniqueInput;
}

export { RecipeIngredientsWhereInput as RecipeIngredientsWhereInput };
