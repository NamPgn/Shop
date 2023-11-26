import React, { useEffect, useMemo, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import MVTable from "../ui/Table";
import { MyButton } from "../ui/Button";
import MVConfirm from "../ui/Confirm";
import MVLink from "../../components/Location/Link";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ColorPicker, Divider, Image, Tag } from "antd";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
} from "../../sevices/products";
import { Modal } from "antd";
import MVInput from "../ui/Input";
import { useForm } from "react-hook-form";
import { MVError, MVSuccess } from "../../components/Message";
import { MySelectWrapper } from "../ui/Select";
import { addColor, getAllColor } from "../../sevices/color";
import { addSize, getAllSize } from "../../sevices/size";
import { addProductChild } from "../../sevices/productChild";
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
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [colorHex, setColorHex] = useState<Color | string>("#1677ff");
  const [modal1Open, setModal1Open] = useState(false);
  const [init, setInit] = useState(false);
  const [id, setId] = useState("");
  const [formatHex, setFormatHex] = useState<ColorPickerProps["format"]>("hex");
  const hexString = useMemo(
    () => (typeof colorHex === "string" ? colorHex : colorHex.toHexString()),
    [colorHex]
  );
  const [product, setProduct]: any = useState([]);
  const [color, setColor]: any = useState([]);
  const [size, setSize]: any = useState([]);
  const { control, handleSubmit, reset } = useForm();
  useEffect(() => {
    const getData = async () => {
      const data: any = await getAllProduct();
      const dataColor = await getAllColor();
      setProduct(data);
      setColor(dataColor);
    };
    getData();
    const getDataColor = async () => {
      const dataColor = await getAllColor();
      setColor(dataColor);
    };
    getDataColor();
    const getDataSize = async () => {
      const data = await getAllSize();
      setSize(data);
    };
    getDataSize();
  }, [init]);

  const handleAddProductDetail = (id: any) => {
    setShowProductDetail((show) => !show);
    setId(id);
  };

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

  const submitColor = async (data: any) => {
    const dataColor = {
      name: hexString,
      nameColor: data.nameColor,
    };
    const response = await addColor(dataColor);
    setInit((init) => !init);
    if (response) {
      MVSuccess(`successfully`);
    }
  };
  const handleCopy = async (data: any) => {
    navigator.clipboard.writeText(data);
    MVSuccess(`Copy successfully`);
  };

  const submitDetail = async (data: any) => {
    const response = await addProductChild(id, data);
    setInit((init) => !init);
    if (response.data.success) {
      MVSuccess(`successfully`);
    }
  };
  const submitSize = async (data: any) => {
    const response = await addSize(data);
    setInit((init) => !init);
    if (response) {
      MVSuccess(`successfully`);
    }
  };
  const colorOptions =
    color.data &&
    color.data?.data.map((item: { nameColor: any; name: any; _id: any }) => ({
      label: item.nameColor,
      value: item._id,
    }));
  const sizeOptions =
    size.data &&
    size.data?.data.map((item: { name: any; _id: any }) => ({
      label: item.name,
      value: item._id,
    }));
  const data =
    product.data &&
    product?.data?.data.map((item: any) => {
      return {
        key: item.id,
        name: (
          <>
            {item.name}
            <span
              className="ml-2 hover:cursor-pointer"
              onClick={() => handleCopy(item.name)}
            >
              <CopyOutlined />
            </span>
          </>
        ),
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
            <MVLink to={`/admin/product/edit/${item._id}`}>
              <MyButton danger shape="circle">
                <EditOutlined />
              </MyButton>
            </MVLink>
            <MVConfirm
              title="Delete the product"
              onConfirm={() => handleDelete(item._id)}
              okText="Yes"
              cancelText="No"
            >
              <MyButton shape="circle" className="ml-2">
                <DeleteOutlined />
              </MyButton>
            </MVConfirm>
          </>
        ),
        option: [
          <MyButton
            onClick={() => handleAddProductDetail(item._id)}
            className="mr-2 bg-blue-700 "
            style={{
              color: "#fff",
            }}
            type="text"
          >
            Add Product Detail
          </MyButton>,
          showProductDetail && (
            <>
              <form onSubmit={handleSubmit(submitColor)} className="mt-5">
                <div>
                  <ColorPicker
                    format={formatHex}
                    value={colorHex}
                    onChange={setColorHex}
                    onFormatChange={setFormatHex}
                  />
                  <span> HEX: {hexString}</span>
                </div>
                <MVInput
                  control={control}
                  name={"nameColor"}
                  placeholder={"Product name color"}
                />
                <MyButton htmlType="submit" icon={<PlusOutlined />}>
                  Add color
                </MyButton>
              </form>
              <Divider />
              <form onSubmit={handleSubmit(submitSize)} className=" mt-5">
                <MVInput
                  control={control}
                  name={"name"}
                  placeholder={"Product size"}
                />
                <MyButton htmlType="submit" icon={<PlusOutlined />}>
                  Add size
                </MyButton>
              </form>
              <Divider />
              <form onSubmit={handleSubmit(submitDetail)}>
                <MVInput
                  control={control}
                  name={"productChildname"}
                  placeholder={"Product Child Name"}
                />
                <MySelectWrapper
                  mode="multiple"
                  control={control}
                  name="size"
                  label={"Size"}
                  placeholder={"Size"}
                  options={sizeOptions}
                />

                <MySelectWrapper
                  mode="multiple"
                  control={control}
                  name="color"
                  label={"Color"}
                  placeholder={"Color"}
                  options={colorOptions}
                />
                <MyButton
                  htmlType="submit"
                  icon={<PlusOutlined />}
                  className="mt-2"
                >
                  Add Detail
                </MyButton>
              </form>
            </>
          ),
        ],
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
          <MVInput name={`name`} placeholder="Product Name" control={control} />
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
        expandable={{
          expandedRowRender: (record: any) => <>{record.option}</>,
        }}
        // rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default Products;
