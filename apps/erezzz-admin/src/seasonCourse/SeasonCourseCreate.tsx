import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { SeasonTitle } from "../season/SeasonTitle";

export const SeasonCourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceInput source="season.id" reference="Season" label="Season">
          <SelectInput optionText={SeasonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
