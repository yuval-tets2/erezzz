import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmailLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Speaker Name" source="speakerName" />
        <TextField label="Title" source="title" />
        <TextField label="Subject" source="subject" />
        <TextField label="Recipient" source="recipient" />
        <TextField label="Status" source="status" />
        <TextField label="Date" source="date" />
      </Datagrid>
    </List>
  );
};
