import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import MVTable from "../ui/Table";
import { MyButton } from "../ui/Button";
import MVConfirm from "../ui/Confirm";
import MVLink from "../../components/Location/Link";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Image, Spin, Tag } from "antd";
import { getAllProduct } from "../../sevices/products";
import { Modal } from "antd";
import MVInput from "../ui/Input";
import { useForm } from "react-hook-form";
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
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Image",
    dataIndex: "image",
  },
  {
    title: "Address",
    dataIndex: "address",
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

const Users: React.FC = () => {
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
      const data: any = await getAllProduct();
      setProduct(data);
    };
    getData();
  }, []);
  const data =
    product.data &&
    product.data.map((item: any) => {
      return {
        key: item.id,
        name: item.name,
        image: (
          <Image
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/394629872_6802798259797704_3690773629479479926_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wF2QndgutjYAX8FS23T&_nc_ht=scontent.fhan14-1.fna&_nc_e2o=f&oh=00_AfCgdG8sUXulYcBPRLgxIPJ5laGiKplMtsx0l695hCGliw&oe=653B0DCF"
          />
        ),
        age: 32,
        address: item.price,
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
      <Spin>
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

export default Users;
