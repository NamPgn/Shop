import { Table } from "antd";
import { memo } from "react";

const MVTable = memo(({ columns, dataSource, ...rest }: any) => {
  return <Table columns={columns} dataSource={dataSource} {...rest}></Table>;
});

export default MVTable;
