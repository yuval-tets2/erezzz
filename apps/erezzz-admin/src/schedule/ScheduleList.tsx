import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Date Of Play" source="dateOfPlay" />
        <TextField label="Id Team1" source="idTeam1" />
        <TextField label="Id Player1" source="idPlayer1" />
        <TextField label="Id Team2" source="idTeam2" />
        <TextField label="Id Player2" source="idPlayer2" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
