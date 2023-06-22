import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TestscheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Testschedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Week" source="week" />
        <TextField label="Team Id" source="teamId" />
        <TextField label="P1 Id" source="p1Id" />
        <TextField label="P2 Id" source="p2Id" />
      </Datagrid>
    </List>
  );
};
