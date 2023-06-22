import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EmailLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Speaker Name" source="speakerName" />
        <TextField label="Title" source="title" />
        <TextField label="Subject" source="subject" />
        <TextField label="Recipient" source="recipient" />
        <TextField label="Status" source="status" />
        <TextField label="Date" source="date" />
      </SimpleShowLayout>
    </Show>
  );
};
