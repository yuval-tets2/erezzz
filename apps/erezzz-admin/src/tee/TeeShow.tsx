import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEE_TITLE_FIELD } from "./TeeTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const TeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bslope" source="bslope" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Gender" source="gender" />
        <TextField label="Par" source="par" />
        <TextField label="Rating" source="rating" />
        <TextField label="Slope" source="slope" />
        <TextField label="Frating" source="frating" />
        <TextField label="Fslope" source="fslope" />
        <TextField label="Brating" source="brating" />
        <ReferenceManyField reference="Hole" target="TeeId" label="Holes">
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Hole Number" source="holeNumber" />
            <TextField label="Par" source="par" />
            <TextField label="Handicap" source="handicap" />
            <TextField label="Length" source="length" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="Tee" source="tee.id" reference="Tee">
              <TextField source={TEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
