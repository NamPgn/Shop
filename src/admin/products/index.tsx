import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import MVTable from "../ui/Table";
import { MyButton } from "../ui/Button";
import MVConfirm from "../ui/Confirm";
import MVLink from "../../components/Location/Link";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Image, Tag } from "antd";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
} from "../../sevices/products";
import { Modal } from "antd";
import MVInput from "../ui/Input";
import { useForm } from "react-hook-form";
import { MVError, MVSuccess } from "../../components/Message";
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
    title: "Image",
    dataIndex: "image",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "createdBy",
    dataIndex: "createdBy",
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

const Products: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [init, setInit] = useState(false);
  const [options, _setOptions] = useState([
    { optionName: "", optionValueName: [] },
    { optionName: "", optionValueName: [] },
  ]);

  const [product, setProduct]: any = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { control, handleSubmit, register, reset } = useForm();
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
  }, [init]);
  const handleAddProduct = async (data: any) => {
    setModal1Open(false);
    reset();
    const response = await addProduct(data);
    setInit((init) => !init);
    if (response.data) {
      MVSuccess("Product added successfully");
    } else {
      MVError("Product added error");
    }
  };
  const handleDelete = async (id: number) => {
    const response = await deleteProduct(id);
    setInit((init) => !init);
    if (response.data) {
      MVSuccess("Product deleted successfully");
    } else {
      MVError("Product deleted failed");
    }
  };

  const handleOk = () => {
    // handleAddProduct([]);
    handleSubmit(handleAddProduct)();
  };
  const data =
    product.data &&
    product.data.data
      .filter((item: any) => item.status !== 0)
      .map((item: any, index: number) => {
        return {
          key: item.id,
          name: item.name,
          createdBy: item.createdBy,
          image: (
            <Image
              width={100}
              height={100}
              style={{
                objectFit: "cover",
              }}
              src=""
            />
          ),
          address: item.price,
          tags: <Tag color="success">isActive</Tag>,
          action: (
            <>
              <MVLink to={`/admin/product/edit/${item.id}`}>
                <MyButton danger shape="circle">
                  <EditOutlined />
                </MyButton>
              </MVLink>
              <MVConfirm
                title="Delete the product"
                onConfirm={() => handleDelete(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <MyButton shape="circle" className="ml-2">
                  <DeleteOutlined />
                </MyButton>
              </MVConfirm>
            </>
          ),
          // children: [
          //   {
          //     key: index + 1,
          //     name: (
          //       <MVInput name="options" placeholder="Options" control={control} />
          //     ),
          //     age: 0,
          //     address: <MyButton type="primary">Add</MyButton>,
          //   },
          // ],
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
        onOk={handleOk}
        onCancel={() => setModal1Open(false)}
      >
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <MVInput
            name={`productName`}
            placeholder="Product Name"
            control={control}
          />
          {/* {options.map((_item, index) => (
            <div key={index}>
              <MVInput
                name={`option[${index}].optionName`}
                placeholder="Option Name"
                control={control}
              />
              <MVInput
                name={`option[${index}].optionValueName`}
                placeholder="Option Value Name"
                control={control}
              />
            </div>
          ))} */}
        </form>
      </Modal>
      <MVTable
        className="w-full"
        // rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default Products;
