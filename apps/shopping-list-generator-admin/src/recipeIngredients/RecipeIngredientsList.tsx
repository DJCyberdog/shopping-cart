import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INGREDIENTS_TITLE_FIELD } from "../ingredients/IngredientsTitle";
import { RECIPES_TITLE_FIELD } from "../recipes/RecipesTitle";

export const RecipeIngredientsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecipeIngredientsItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Recipe" source="recipes.id" reference="Recipes">
          <TextField source={RECIPES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
