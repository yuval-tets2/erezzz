import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const MatchscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Matchscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
