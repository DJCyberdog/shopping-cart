import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INGREDIENTS_TITLE_FIELD } from "./IngredientsTitle";
import { RECIPES_TITLE_FIELD } from "../recipes/RecipesTitle";

export const IngredientsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ExpirationDate" source="expirationDate" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RecipeIngredients"
          target="ingredientId"
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
