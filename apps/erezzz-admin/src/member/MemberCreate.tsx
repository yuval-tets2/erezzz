import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MatchscoreTitle } from "../matchscore/MatchscoreTitle";
import { ScoreTitle } from "../score/ScoreTitle";
import { TeamTitle } from "../team/TeamTitle";

export const MemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="matchscore"
          reference="Matchscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchscoreTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scores"
          reference="Score"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="team"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
        <TextInput label="Lname" source="lname" />
        <TextInput label="Fname" source="fname" />
        <TextInput label="Email" source="email" />
        <TextInput label="Active" source="active" />
        <SelectInput
          source="tee"
          label="Tee"
          choices={[
            { label: "MEN", value: "MEN" },
            { label: "SENIOR", value: "SENIOR" },
            { label: "LADIES", value: "LADIES" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Ghin" source="ghin" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
