import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RandomplayerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Randomplayer Id" source="RandomplayerId" />
        <TextField label="Lname" source="lname" />
        <TextField label="Fname" source="fname" />
      </SimpleShowLayout>
    </Show>
  );
};
