import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INGREDIENTS_TITLE_FIELD } from "../ingredients/IngredientsTitle";
import { RECIPES_TITLE_FIELD } from "../recipes/RecipesTitle";

export const RecipeIngredientsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Recipe" source="recipes.id" reference="Recipes">
          <TextField source={RECIPES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
