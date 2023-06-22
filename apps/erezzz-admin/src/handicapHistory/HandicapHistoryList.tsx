import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HandicapHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HandicapHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Created Date" source="createdDate" />
        <TextField label="Id" source="id" />
        <TextField label="Player Name" source="playerName" />
        <TextField label="Ghin Number" source="ghinNumber" />
        <TextField label="Gindex" source="gindex" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
