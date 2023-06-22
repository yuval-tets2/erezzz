import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TeamCopyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Season Id" source="seasonId" />
        <NumberInput step={1} label="Team Id" source="teamId" />
        <NumberInput step={1} label="Player Id" source="playerId" />
        <NumberInput step={1} label="Player Rank" source="playerRank" />
        <NumberInput step={1} label="Sub" source="sub" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
