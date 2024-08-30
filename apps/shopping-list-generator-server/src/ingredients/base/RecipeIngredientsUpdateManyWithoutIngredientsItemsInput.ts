/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RecipeIngredientsWhereUniqueInput } from "../../recipeIngredients/base/RecipeIngredientsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RecipeIngredientsUpdateManyWithoutIngredientsItemsInput {
  @Field(() => [RecipeIngredientsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecipeIngredientsWhereUniqueInput],
  })
  connect?: Array<RecipeIngredientsWhereUniqueInput>;

  @Field(() => [RecipeIngredientsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecipeIngredientsWhereUniqueInput],
  })
  disconnect?: Array<RecipeIngredientsWhereUniqueInput>;

  @Field(() => [RecipeIngredientsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RecipeIngredientsWhereUniqueInput],
  })
  set?: Array<RecipeIngredientsWhereUniqueInput>;
}

export { RecipeIngredientsUpdateManyWithoutIngredientsItemsInput as RecipeIngredientsUpdateManyWithoutIngredientsItemsInput };
