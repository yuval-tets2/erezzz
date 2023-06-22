import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Speaker Name" source="speakerName" />
        <TextInput label="Title" source="title" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
