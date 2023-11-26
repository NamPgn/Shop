import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import MVLink from "../../../../components/Location/Link";
import { MyButton } from "../../../ui/Button";
import MVConfirm from "../../../ui/Confirm";
import MVInput from "../../../ui/Input";
import MVTable from "../../../ui/Table";
import { getAllProductChild } from "../../../../sevices/productChild";
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
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Size",
    dataIndex: "size",
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

const ProductChild: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [product, setProduct]: any = useState([]);
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
      const data: any = await getAllProductChild();
      setProduct(data);
    };
    getData();
  }, []);
  const data =
    product.data &&
    product.data?.data.map((item: any) => {
      return {
        key: item.id,
        name: item.productChildname,
        tags: <Tag color="success">isActive</Tag>,
        color: item.color.map((color: any) => color && color.nameColor + " "),
        size: item.size.map((size: any) => size && size.name + " "),
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
      <MyButton
        icon={<PlusOutlined />}
        onClick={() => setModal1Open(true)}
        className="mb-2 text-[#fff] bg-[#062868ed]"
      >
        New product
      </MyButton>
      <Modal
        title="Add New Product"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <MVInput label={"name"} {...register("name")} control={control} />
        <MVInput label={"name"} {...register("name")} control={control} />
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

export default ProductChild;
