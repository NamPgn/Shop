import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import MVTable from "../../../../ui/Table";
import MVInput from "../../../../ui/Input";
import MVLink from "../../../../../components/Location/Link";
import { MyButton } from "../../../../ui/Button";
import MVConfirm from "../../../../ui/Confirm";
import { getOptionsValue } from "../../../../../sevices/options";
interface DataType {
  key: React.Key;
  name: string;
  action: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const OptionsValue: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [optionsValue, setOptionsValue]: any = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { register, control } = useForm();
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    const getData = async () => {
      const data: any = await getOptionsValue();
      setOptionsValue(data);
    };
    getData();
  }, []);
  const data =
    optionsValue.data &&
    optionsValue.data.data.map((item: any) => {
      return {
        key: item.id,
        name: item.valueName,
        action: (
          <>
            <MVLink to={`/admin/product/edit/`}>
              <MyButton danger shape="circle">
                <EditOutlined />
              </MyButton>
            </MVLink>
            <MVConfirm
              title="Delete the product"
              // onConfirm={() => confirm(i)}
              okText="Yes"
              cancelText="No"
            >
              <MyButton shape="circle" className="ml-2">
                <DeleteOutlined />
              </MyButton>
            </MVConfirm>
          </>
        ),
      };
    });
  return (
    <>
      <Modal
        title="Add New Product"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <MVInput label={"name"} {...register("name")} control={control} />
      </Modal>
      <MVTable
        className="w-full"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default OptionsValue;
