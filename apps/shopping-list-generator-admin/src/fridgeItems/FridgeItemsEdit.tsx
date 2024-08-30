import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const FridgeItemsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ExpirationDate" source="expirationDate" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
