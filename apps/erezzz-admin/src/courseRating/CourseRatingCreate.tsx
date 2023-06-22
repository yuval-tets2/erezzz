import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const CourseRatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Tee" source="tee" />
        <NumberInput label="Course Slope" source="courseSlope" />
        <NumberInput label="Course Rating" source="courseRating" />
        <NumberInput step={1} label="Course Par" source="coursePar" />
        <NumberInput label="Front Slope" source="frontSlope" />
        <NumberInput label="Front Rating" source="frontRating" />
        <NumberInput step={1} label="Front Par" source="frontPar" />
        <NumberInput label="Back Slope" source="backSlope" />
        <NumberInput label="Back Rating" source="backRating" />
        <NumberInput step={1} label="Back Par" source="backPar" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
