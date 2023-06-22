import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";

export const TeamscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Team Iid" source="teamIid" />
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput label="Points" source="points" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
