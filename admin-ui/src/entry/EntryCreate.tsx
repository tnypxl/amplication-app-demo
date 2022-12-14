import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
