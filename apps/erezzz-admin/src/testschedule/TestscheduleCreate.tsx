import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const TestscheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Week" source="week" />
        <NumberInput step={1} label="Team Id" source="teamId" />
        <NumberInput step={1} label="P1 Id" source="p1Id" />
        <NumberInput step={1} label="P2 Id" source="p2Id" />
      </SimpleForm>
    </Create>
  );
};
