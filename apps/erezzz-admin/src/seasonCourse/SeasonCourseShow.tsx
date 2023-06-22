import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const SeasonCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Season" source="season.id" reference="Season">
          <TextField source={SEASON_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
