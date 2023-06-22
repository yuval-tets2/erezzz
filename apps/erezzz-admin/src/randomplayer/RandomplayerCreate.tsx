import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RandomplayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Randomplayer Id" source="RandomplayerId" />
        <TextInput label="Lname" source="lname" />
        <TextInput label="Fname" source="fname" />
      </SimpleForm>
    </Create>
  );
};
