import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const ShoppingCartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="CreatedTime" source="createdTime" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
