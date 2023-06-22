import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { MatchscoreTitle } from "../matchscore/MatchscoreTitle";
import { ScoreTitle } from "../score/ScoreTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
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
        <DateTimeInput label="Date Of Play" source="dateOfPlay" />
        <NumberInput step={1} label="Id Team1" source="idTeam1" />
        <NumberInput step={1} label="Id Player1" source="idPlayer1" />
        <NumberInput step={1} label="Id Team2" source="idTeam2" />
        <NumberInput step={1} label="Id Player2" source="idPlayer2" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput
          source="scores"
          reference="Score"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
