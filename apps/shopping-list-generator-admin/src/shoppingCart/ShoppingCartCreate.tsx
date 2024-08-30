import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const ShoppingCartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="CreatedTime" source="createdTime" />
        <div />
      </SimpleForm>
    </Create>
  );
};
