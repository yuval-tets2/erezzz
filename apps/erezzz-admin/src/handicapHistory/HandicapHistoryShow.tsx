import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const HandicapHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Created Date" source="createdDate" />
        <TextField label="Id" source="id" />
        <TextField label="Player Name" source="playerName" />
        <TextField label="Ghin Number" source="ghinNumber" />
        <TextField label="Gindex" source="gindex" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
