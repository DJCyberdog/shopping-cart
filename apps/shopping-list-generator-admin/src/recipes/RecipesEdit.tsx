import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { RecipeIngredientsTitle } from "../recipeIngredients/RecipeIngredientsTitle";

export const RecipesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="CookingTime" source="cookingTime" />
        <BooleanInput label="IsFavorite" source="isFavorite" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="recipeIngredientsItems"
          reference="RecipeIngredients"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeIngredientsTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="recipeType"
          label="RecipeType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Servings" source="servings" />
      </SimpleForm>
    </Edit>
  );
};
