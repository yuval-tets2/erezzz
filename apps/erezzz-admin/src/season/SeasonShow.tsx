import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { SEASON_TITLE_FIELD } from "./SeasonTitle";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";

export const SeasonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Midseason Date" source="midseasonDate" />
        <TextField label="Num Teams" source="numTeams" />
        <TextField label="Players Per Team" source="playersPerTeam" />
        <TextField label="Schedule Created" source="scheduleCreated" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceManyField
          reference="SeasonCourse"
          target="SeasonId"
          label="SeasonCourses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Season"
              source="season.id"
              reference="Season"
            >
              <TextField source={SEASON_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Team" target="SeasonId" label="Teams">
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Team Id" source="teamId" />
            <TextField label="Player Rank" source="playerRank" />
            <TextField label="Sub" source="sub" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="Members"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Season"
              source="season.id"
              reference="Season"
            >
              <TextField source={SEASON_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
