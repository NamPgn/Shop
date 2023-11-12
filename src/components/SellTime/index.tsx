import { CarOutlined } from "@ant-design/icons";
import { Typography } from "@mui/material";

const SellTime = () => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="w-6/12 mt-[50px] ">
          <img
            src="https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-[30px]">
        <div className="icon text-[44px] text-[#ca1515]">
          <CarOutlined />
        </div>
        <div className="">
          <Typography variant="h5">Free Shipping</Typography>
          <p>For all oder over $99</p>
        </div>
      </div>
    </div>
  );
};

export default SellTime;
