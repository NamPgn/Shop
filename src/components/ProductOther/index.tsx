import { Rating, Typography } from "@mui/material";
import { useState } from "react";

const ProductOther=()=>{
  const [value, setValue] = useState<number | null>(2);
  const list = [
    { name: 'Product 1', category: 'All' },
    { name: 'Product 2', category: 'Women’s' },
    { name: 'Product 3', category: 'Men’s' },
    { name: 'Product 4', category: 'Kid’s' },
  ];
  return (
    <>
       <div className="texxt-center">
          <Typography>RELATED PRODUCTS</Typography>
          <div className="products">
            <div className='mt-5 text-center grid_product gap-5'>
              {list.map((item, index) => {
                return (
                  <div key={index} >
                    <div className="image">
                      <img src="https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg" alt="" />
                    </div>
                    <div className="title">
                      {item.name}
                    </div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <div className="price">
                      $ 59.0
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductOther