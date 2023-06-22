import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const HandicapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Player Id" source="playerId" />
        <NumberInput step={1} label="Handicap" source="handicap" />
        <NumberInput label="Index" source="index" />
      </SimpleForm>
    </Edit>
  );
};
