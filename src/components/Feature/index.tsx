import { Rating, Typography } from "@mui/material";
import { useState } from "react";

const Feature = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <div className="container">
      <div className="mt-[50px]">
        <Typography variant="h5" className="w-6/12">
          HOT TREND
        </Typography>
        <div className="flex mt-5 gap-5">
          <div className="w-1/12 h-24">
            <img
              src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/yasuo-chan-long-kiem-16-10-58-26.jpg"
              alt=""
            />
          </div>
          <div className="">
            <div>Chain bucket bag</div>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                console.log(event)
              }}
            />
            <p>$59.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
