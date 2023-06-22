import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClubTitle } from "../club/ClubTitle";
import { CourseRatingTitle } from "../courseRating/CourseRatingTitle";
import { CourseTeetypeTitle } from "../courseTeetype/CourseTeetypeTitle";
import { SeasonCourseTitle } from "../seasonCourse/SeasonCourseTitle";
import { TeeTitle } from "../tee/TeeTitle";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Course Name" source="courseName" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="club.id" reference="Club" label="Club">
          <SelectInput optionText={ClubTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="courseRating"
          reference="CourseRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseRatingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="courseTeetype"
          reference="CourseTeetype"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CourseTeetypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="seasonCourse"
          reference="SeasonCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SeasonCourseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tee"
          reference="Tee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
