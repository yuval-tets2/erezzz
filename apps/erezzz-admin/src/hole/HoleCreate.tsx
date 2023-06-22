import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeeTitle } from "../tee/TeeTitle";

export const HoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Hole Number" source="holeNumber" />
        <NumberInput step={1} label="Par" source="par" />
        <NumberInput step={1} label="Handicap" source="handicap" />
        <NumberInput step={1} label="Length" source="length" />
        <DateTimeInput label="Created At" source="createdAt" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="tee.id" reference="Tee" label="Tee">
          <SelectInput optionText={TeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
