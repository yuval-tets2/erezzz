import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const CourseTeetypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Tee Id" source="teeId" />
        <SelectInput
          source="teeType"
          label="Tee Type"
          choices={[
            { label: "MEN", value: "MEN" },
            { label: "SENIOR", value: "SENIOR" },
            { label: "LADIES", value: "LADIES" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
