import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { TEE_TITLE_FIELD } from "../tee/TeeTitle";

export const HoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
