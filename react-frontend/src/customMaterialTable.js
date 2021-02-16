import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./tableIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function CustomMaterialTable({ tableColumns, dataTable }) {
  const classes = useStyles();
  const { useState } = React;

  const [columns, setColumns] = useState([]);

  const [data, setData] = useState([
    {
      TABLE_CATALOG: "Mehmet",
      TABLE_SCHEMA: "Baran",
      COLUMN_NAME: 1987,
      ORDINAL_POSITION: 63,
    },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);
  const COLUMNS = [];
  const DATA = [];

  if (tableColumns[0]) {
    Object.keys(tableColumns[0]).map((key) => {
      COLUMNS.push({ title: key, field: key });
    });
    tableColumns.map((column) => {
      DATA.push(column);
    });
  }

  return (
    <MaterialTable
      title="Editable Preview"
      columns={COLUMNS}
      data={DATA}
      icons={tableIcons}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
