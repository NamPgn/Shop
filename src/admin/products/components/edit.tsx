import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MyButton } from "../../ui/Button";
import MVInput from "../../ui/Input";
import { editProduct, getOne } from "../../../sevices/products";
import { useParams } from "react-router-dom";
import { MVError, MVSuccess } from "../../../components/Message";

const EditProduct: React.FC = () => {
  const { control, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [init, setInit] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data: any = await getOne(id);
      reset(data?.data?.data);
      console.log(data?.data?.data)
    };
    getData();
  }, [init]);
  const onsubmit = async (data: any) => {
    const response = await editProduct(id, data);
    setInit((init) => !init);
    if (response.status==200) {
      MVSuccess("Product deleted successfully");
    } else {
      MVError("Product deleted failed");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <MVInput label={"Name"} name={"name"} control={control} />
        <div className="mt-2">
          <MyButton htmlType="submit" className="btn btn-primary">
            Submit
          </MyButton>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
