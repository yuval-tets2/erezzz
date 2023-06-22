import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TeamCopyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Season Id" source="seasonId" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="Player Id" source="playerId" />
        <TextField label="Player Rank" source="playerRank" />
        <TextField label="Sub" source="sub" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
