import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RandomplayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Randomplayer Id" source="RandomplayerId" />
        <TextInput label="Lname" source="lname" />
        <TextInput label="Fname" source="fname" />
      </SimpleForm>
    </Edit>
  );
};
