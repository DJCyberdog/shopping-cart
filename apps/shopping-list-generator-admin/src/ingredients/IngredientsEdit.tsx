import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecipeIngredientsTitle } from "../recipeIngredients/RecipeIngredientsTitle";

export const IngredientsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
