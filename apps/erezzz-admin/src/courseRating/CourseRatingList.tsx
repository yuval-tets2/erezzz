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

export const CourseRatingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CourseRatings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Tee" source="tee" />
        <TextField label="Course Slope" source="courseSlope" />
        <TextField label="Course Rating" source="courseRating" />
        <TextField label="Course Par" source="coursePar" />
        <TextField label="Front Slope" source="frontSlope" />
        <TextField label="Front Rating" source="frontRating" />
        <TextField label="Front Par" source="frontPar" />
        <TextField label="Back Slope" source="backSlope" />
        <TextField label="Back Rating" source="backRating" />
        <TextField label="Back Par" source="backPar" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
