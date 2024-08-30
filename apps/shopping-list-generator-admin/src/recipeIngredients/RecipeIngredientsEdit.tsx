import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { IngredientsTitle } from "../ingredients/IngredientsTitle";
import { RecipesTitle } from "../recipes/RecipesTitle";

export const RecipeIngredientsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ingredient.id"
          reference="Ingredients"
          label="Ingredient"
        >
          <SelectInput optionText={IngredientsTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="recipe.id" reference="Recipes" label="Recipe">
          <SelectInput optionText={RecipesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
