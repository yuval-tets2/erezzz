import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEAM_TITLE_FIELD } from "./TeamTitle";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="Player Rank" source="playerRank" />
        <TextField label="Sub" source="sub" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Members" source="member.id" reference="Member">
          <TextField source={MEMBER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Season" source="season.id" reference="Season">
          <TextField source={SEASON_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Teamscore"
          target="TeamId"
          label="Teamscores"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Team Iid" source="teamIid" />
            <TextField label="Date Of Play" source="dateOfPlay" />
            <TextField label="Points" source="points" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
