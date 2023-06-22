import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";

export const SeasonCourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SeasonCourses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Season" source="season.id" reference="Season">
          <TextField source={SEASON_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
