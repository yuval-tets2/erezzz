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

import { COURSE_TITLE_FIELD } from "./CourseTitle";
import { SEASON_TITLE_FIELD } from "../season/SeasonTitle";
import { CLUB_TITLE_FIELD } from "../club/ClubTitle";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Course Name" source="courseName" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Club" source="club.id" reference="Club">
          <TextField source={CLUB_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CourseRating"
          target="CourseId"
          label="CourseRatings"
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
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CourseTeetype"
          target="CourseId"
          label="CourseTeetypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Tee Id" source="teeId" />
            <TextField label="Tee Type" source="teeType" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SeasonCourse"
          target="CourseId"
          label="SeasonCourses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Season"
              source="season.id"
              reference="Season"
            >
              <TextField source={SEASON_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Tee" target="CourseId" label="Tees">
          <Datagrid rowClick="show">
            <TextField label="Bslope" source="bslope" />
            <TextField label="Created At" source="createdAt" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
