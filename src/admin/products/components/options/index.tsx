import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Image, Spin, Tag } from "antd";
import { Modal } from "antd";
import { useFieldArray, useForm } from "react-hook-form";
import MVLink from "../../../../components/Location/Link";
import { MyButton } from "../../../ui/Button";
import MVConfirm from "../../../ui/Confirm";
import MVInput from "../../../ui/Input";
import MVTable from "../../../ui/Table";
import {
  addOption,
  deleteOption,
  deleteOptionValue,
  getOptions,
} from "../../../../sevices/options";
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
    title: "Action",
    dataIndex: "action",
  },
];

const Options: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [option, setOption]: any = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [inputs, setInputs] = useState(["default"]);
  const [init, setInit] = useState(false);
  const { control, handleSubmit } = useForm();
  const [optionsValueid, setId] = useState("");
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const removeInput = (index: any) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    const getData = async () => {
      const data: any = await getOptions();
      setOption(data);
    };
    getData();
  }, [init, optionsValueid]);
  const getId = (id: any) => {
    console.log("Clicked ID:", id); // Kiểm tra xem hàm được gọi và giá trị ID nhận được
    setId(id);
  };
  const handleOK = async (data: any) => {
    const optionValues = Object.keys(data)
      .filter((key) => key.startsWith("optionValue"))
      .map((key) => data[key]);
    const formData: any = {};
    formData.optionName = data.name;
    formData.optionValueName = optionValues;
    const response = await addOption(formData);
    setInit((init) => !init);
    if (response.data) {
      MVSuccess("Successfully added");
    } else {
      MVSuccess("Added errored");
    }
  };
  // const onSubmit = (data: any) => {
  //   const optionValues = Object.keys(data)
  //     .filter((key) => key.startsWith("optionValue"))
  //     .map((key) => data[key]);

  //   const formData: any = {};
  //   formData.name = data.name;
  //   formData.optionValueName = optionValues;
  //   console.log(formData);
  // };

  const handleDeleteOptionsValue = async (id: number) => {
    const response = await deleteOptionValue(id);
    setInit((init) => !init);
    if (response.data) {
      MVSuccess("Successfully deleted option");
    } else {
      MVSuccess("Deleted errored");
    }
  };
  const handleEditOptionValue = (data: any) => {
    setModal1Open(false);
  };
  const handleOk = () => {
    // handleAddProduct([]);
    handleSubmit(handleEditOptionValue)();
  };
  const confirm = async (id: number) => {
    const response = await deleteOption(id);
    setInit((init) => !init);
    if (response.data) {
      MVSuccess("Successfully deleted option");
    } else {
      MVSuccess("Deleted errored");
    }
  };
  const data =
    option.data &&
    option?.data.data.content
      .filter((item: any) => item.status !== 0)
      .map((item: any) => {
        return {
          key: item.id,
          name: item.name,
          action: (
            <>
              <MVLink to={`/admin/product/edit/`}>
                <MyButton danger shape="circle">
                  <EditOutlined />
                </MyButton>
              </MVLink>
              <MVConfirm
                title="Delete the options"
                onConfirm={() => confirm(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <MyButton shape="circle" className="ml-2">
                  <DeleteOutlined />
                </MyButton>
              </MVConfirm>
            </>
          ),
          children: item.optinonValue.map((value: any) => {
            return {
              key: value.id,
              name: value.valueName,
              action: (
                <>
                  <MyButton
                    type="primary"
                    onClick={() => handleDeleteOptionsValue(value.id)}
                  >
                    Delete
                  </MyButton>
                  <MyButton
                    danger
                    className="ml-2"
                    onClick={() => getId(value.id)}
                  >
                    Edit
                  </MyButton>
                </>
              ),
            };
          }),
        };
      });
  return (
    <>
      <Modal
        title="Edit Options Value"
        centered
        open={modal1Open}
        onOk={handleOk}
        onCancel={() => setModal1Open(false)}
      >
        <form>
          <MVInput name={"name"} placeholder="Options Name" control={control} />
        </form>
      </Modal>
      <form onSubmit={handleSubmit(handleOK)}>
        <MVInput name={"name"} placeholder="Options Name" control={control} />
        <MyButton onClick={addInput} className="mb-2">
          Add Options Value
        </MyButton>

        {inputs.map((input, index) => (
          <div key={index}>
            <MVInput
              name={`optionValue${index}`}
              placeholder="Options"
              control={control}
            />
            <MyButton className="mb-5" onClick={() => removeInput(index)}>
              Remove
            </MyButton>
          </div>
        ))}
        <MyButton
          icon={<PlusOutlined />}
          className="mb-5  text-[#fff] bg-[#062868ed]"
          type="primary"
          htmlType="submit"
        >
          Add Options
        </MyButton>
      </form>
      <MVTable
        className="w-full"
        // rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default Options;
