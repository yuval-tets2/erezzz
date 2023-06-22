import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HandicapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Player Id" source="playerId" />
        <TextField label="Handicap" source="handicap" />
        <TextField label="Index" source="index" />
        <DateField source="updated" label="Updated" />
      </SimpleShowLayout>
    </Show>
  );
};
