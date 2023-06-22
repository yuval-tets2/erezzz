import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";
import { SeasonTitle } from "../season/SeasonTitle";
import { TeamscoreTitle } from "../teamscore/TeamscoreTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Team Id" source="teamId" />
        <NumberInput step={1} label="Player Rank" source="playerRank" />
        <NumberInput step={1} label="Sub" source="sub" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="members.id" reference="Member" label="Members">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <ReferenceInput source="season.id" reference="Season" label="Season">
          <SelectInput optionText={SeasonTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="teamscore"
          reference="Teamscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamscoreTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
