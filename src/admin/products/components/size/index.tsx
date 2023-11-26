import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Spin, Tag } from "antd";
import { useForm } from "react-hook-form";
import MVLink from "../../../../components/Location/Link";
import { MyButton } from "../../../ui/Button";
import MVConfirm from "../../../ui/Confirm";
import MVInput from "../../../ui/Input";
import MVTable from "../../../ui/Table";
import { addSize, getAllSize } from "../../../../sevices/size";
import { MVSuccess } from "../../../../components/Message";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  action: any;
  tags: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Size: React.FC = () => {
  const [product, setProduct]: any = useState([]);
  const [init, setInit] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [Isloading, setIsloading]: any = useState(true);
  const { control, handleSubmit } = useForm();
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
      const data: any = await getAllSize();
      setProduct(data);
      setIsloading(false);
    };
    getData();
  }, [init]);
  const submitSize = async (data: any) => {
    const response = await addSize(data);
    setInit((init) => !init);
    if (response) {
      MVSuccess(`successfully`);
    }
  };
  const data =
    product.data &&
    product.data.data.map((item: any) => {
      return {
        key: item.id,
        name: item.name,
        tags: <Tag color="success">isActive</Tag>,
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
      <form onSubmit={handleSubmit(submitSize)} className=" mt-5">
        <MVInput control={control} name={"name"} placeholder={"Product size"} />
        <MyButton htmlType="submit" className="mb-2" icon={<PlusOutlined />} type="primary">
          Add size
        </MyButton>
      </form>
      <Spin spinning={Isloading}>
        <MVTable
          className="w-full"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </Spin>
    </>
  );
};

export default Size;
