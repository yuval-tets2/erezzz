import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const HandicapCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Player Id" source="playerId" />
        <NumberInput step={1} label="Handicap" source="handicap" />
        <NumberInput label="Index" source="index" />
      </SimpleForm>
    </Create>
  );
};
