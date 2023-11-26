import React, { useEffect, useMemo, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Spin, Tag } from "antd";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import MVLink from "../../../../components/Location/Link";
import { ColorPicker } from "antd";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
import { MyButton } from "../../../ui/Button";
import MVConfirm from "../../../ui/Confirm";
import MVInput from "../../../ui/Input";
import MVTable from "../../../ui/Table";
import { addColor, getAllColor } from "../../../../sevices/color";
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

const Color: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [product, setProduct]: any = useState([]);
  const [colorHex, setColorHex] = useState<Color | string>("#1677ff");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [init, setInit] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const [formatHex, setFormatHex] = useState<ColorPickerProps["format"]>("hex");
  const hexString = useMemo(
    () => (typeof colorHex === "string" ? colorHex : colorHex.toHexString()),
    [colorHex]
  );
  const [Isloading, setIsloading]: any = useState(true);
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
      const data: any = await getAllColor();
      setProduct(data);
      setIsloading(false);
    };
    getData();
  }, [init]);
  const submitColor = async (data: any) => {
    setModal1Open(false);
    reset();
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
  const handleOk = () => {
    setModal1Open(false);
    handleSubmit(submitColor)();
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
      <MyButton
        icon={<PlusOutlined />}
        onClick={() => setModal1Open(true)}
        className="mb-2 text-[#fff] bg-[#062868ed]"
      >
        New Color
      </MyButton>
      <Modal
        title="Add New Product"
        centered
        open={modal1Open}
        onOk={handleOk}
        onCancel={() => setModal1Open(false)}
      >
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
          {/* <MyButton htmlType="submit" icon={<PlusOutlined />}>
            Add color
          </MyButton> */}
        </form>
      </Modal>
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

export default Color;
