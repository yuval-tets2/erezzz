import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MemberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Members"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Lname" source="lname" />
        <TextField label="Fname" source="fname" />
        <TextField label="Email" source="email" />
        <TextField label="Active" source="active" />
        <TextField label="Tee" source="tee" />
        <TextField label="Ghin" source="ghin" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
