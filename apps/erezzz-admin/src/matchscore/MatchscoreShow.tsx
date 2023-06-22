import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const MatchscoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="Player Points" source="playerPoints" />
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
