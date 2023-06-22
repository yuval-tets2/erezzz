import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TeamscoreCopyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Teamkey" source="teamkey" />
        <NumberInput step={1} label="Team Iid" source="teamIid" />
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput label="Points" source="points" />
      </SimpleForm>
    </Create>
  );
};
