import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const ScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Score Date" source="scoreDate" />
        <TextField label="Id" source="id" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="H1" source="h1" />
        <TextField label="H2" source="h2" />
        <TextField label="H3" source="h3" />
        <TextField label="H4" source="h4" />
        <TextField label="H5" source="h5" />
        <TextField label="H6" source="h6" />
        <TextField label="H7" source="h7" />
        <TextField label="H8" source="h8" />
        <TextField label="H9" source="h9" />
        <TextField label="Front" source="front" />
        <TextField label="Fhndcp" source="fhndcp" />
        <TextField label="Fnet" source="fnet" />
        <TextField label="Nine Played" source="ninePlayed" />
        <BooleanField label="Press" source="press" />
        <TextField label="H10" source="h10" />
        <TextField label="H11" source="h11" />
        <TextField label="H12" source="h12" />
        <TextField label="H13" source="h13" />
        <TextField label="H14" source="h14" />
        <TextField label="H15" source="h15" />
        <TextField label="H16" source="h16" />
        <TextField label="H17" source="h17" />
        <TextField label="H18" source="h18" />
        <TextField label="Back" source="back" />
        <TextField label="Bhndcp" source="bhndcp" />
        <TextField label="Bnet" source="bnet" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Members" source="member.id" reference="Member">
          <TextField source={MEMBER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Schedule"
          source="schedule.id"
          reference="Schedule"
        >
          <TextField source={SCHEDULE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
