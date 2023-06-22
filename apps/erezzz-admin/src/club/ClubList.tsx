import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClubList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Clubs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
      </Datagrid>
    </List>
  );
};
