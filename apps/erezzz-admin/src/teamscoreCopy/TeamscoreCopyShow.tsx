import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TeamscoreCopyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Id" source="id" />
        <TextField label="Teamkey" source="teamkey" />
        <TextField label="Team Iid" source="teamIid" />
        <TextField label="Date Of Play" source="dateOfPlay" />
        <TextField label="Points" source="points" />
        <DateField source="createdAt" label="Created At" />
      </SimpleShowLayout>
    </Show>
  );
};
