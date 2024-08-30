import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecipeIngredientsTitle } from "../recipeIngredients/RecipeIngredientsTitle";

export const IngredientsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ExpirationDate" source="expirationDate" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceArrayInput
          source="recipeIngredientsItems"
          reference="RecipeIngredients"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeIngredientsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
