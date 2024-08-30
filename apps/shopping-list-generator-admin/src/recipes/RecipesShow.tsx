import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INGREDIENTS_TITLE_FIELD } from "../ingredients/IngredientsTitle";
import { RECIPES_TITLE_FIELD } from "./RecipesTitle";

export const RecipesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CookingTime" source="cookingTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsFavorite" source="isFavorite" />
        <TextField label="Name" source="name" />
        <TextField label="RecipeType" source="recipeType" />
        <TextField label="Servings" source="servings" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RecipeIngredients"
          target="recipeId"
          label="RecipeIngredientsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Ingredient"
              source="ingredients.id"
              reference="Ingredients"
            >
              <TextField source={INGREDIENTS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Recipe"
              source="recipes.id"
              reference="Recipes"
            >
              <TextField source={RECIPES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
