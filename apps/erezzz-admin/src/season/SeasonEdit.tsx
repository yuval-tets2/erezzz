import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { SeasonCourseTitle } from "../seasonCourse/SeasonCourseTitle";
import { TeamTitle } from "../team/TeamTitle";

export const SeasonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="seasonCourse"
          reference="SeasonCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SeasonCourseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="team"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
        <DateTimeInput label="Midseason Date" source="midseasonDate" />
        <NumberInput step={1} label="Num Teams" source="numTeams" />
        <NumberInput
          step={1}
          label="Players Per Team"
          source="playersPerTeam"
        />
        <NumberInput
          step={1}
          label="Schedule Created"
          source="scheduleCreated"
        />
      </SimpleForm>
    </Edit>
  );
};
