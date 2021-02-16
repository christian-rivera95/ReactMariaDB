import React from "react";
import MaterialTable from "material-table";
import tableIconsList from "./tableIcons";

const CustomMaterialTable = ({
  title,
  data,
  columns,
  isLoading,
  actions,
  tableIcons,
  className,
}) => (
  <>
    <MaterialTable
      className={className}
      isLoading={isLoading}
      icons={tableIcons ? tableIcons : tableIconsList}
      options={{ pageSizeOptions: [10, 25, 100], pageSize: 10 }}
      title={title}
      columns={columns}
      data={data}
      actions={actions}
    />
  </>
);

export default CustomMaterialTable;
