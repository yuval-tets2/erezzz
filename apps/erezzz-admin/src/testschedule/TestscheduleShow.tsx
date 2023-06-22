import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TestscheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Week" source="week" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="P1 Id" source="p1Id" />
        <TextField label="P2 Id" source="p2Id" />
      </SimpleShowLayout>
    </Show>
  );
};
