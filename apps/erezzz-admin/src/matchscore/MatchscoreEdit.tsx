import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MemberTitle } from "../member/MemberTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const MatchscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Team Id" source="teamId" />
        <NumberInput label="Player Points" source="playerPoints" />
        <ReferenceInput source="members.id" reference="Member" label="Members">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
