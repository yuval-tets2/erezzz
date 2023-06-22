import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLUB_TITLE_FIELD } from "../club/ClubTitle";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Courses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Course Name" source="courseName" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Club" source="club.id" reference="Club">
          <TextField source={CLUB_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
