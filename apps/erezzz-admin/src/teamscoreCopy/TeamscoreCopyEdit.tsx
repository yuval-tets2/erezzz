import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TeamscoreCopyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Teamkey" source="teamkey" />
        <NumberInput step={1} label="Team Iid" source="teamIid" />
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput label="Points" source="points" />
      </SimpleForm>
    </Edit>
  );
};
