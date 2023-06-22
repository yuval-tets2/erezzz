import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Speaker Name" source="speakerName" />
        <TextInput label="Title" source="title" />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Create>
  );
};
