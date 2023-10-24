import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageFooter from "../../components/ImageFooter";
import { Rating, Tab, Tabs, Typography } from "@mui/material";
import { HeartOutlined, MenuOutlined } from "@ant-design/icons";
const ProductDetail = () => {
  const { id } = useParams();
  const [value, setValue] = useState<number | null>(2);
  const [valueTab, setValueTab] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };
  return (
    <>
      <div className="container">
        <div className="mt-[50px] flex gap-5">
          <div className="w-4/12">
            <img src="https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg" alt="" />
          </div>
          <div className="detail w-8/12">
            <Typography variant="h4">ESSENTIAL STRUCTURED BLAZER</Typography>
            <p>Brand: SKMEIMore Men Watches from SKMEI</p>
            <div className="flex items-center gap-2">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <div>( 138 reviews )</div>
            </div>
            <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
            <p className="text-[#999]">Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.</p>
            <div className="product__details__button mt-5">
              <div className="quantity">
                <span>Quantity:</span>
                <div className="pro-qty"><span className="dec qtybtn">-</span>
                  <input type="text" value="1" />
                  <span className="inc qtybtn">+</span></div>
              </div>
              <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</a>
              <ul className="flex gap-2">
                <li><HeartOutlined /></li>
                <li><MenuOutlined /></li>
              </ul>
            </div>
            <div>
              <br />
              <div>Availability: In Stock</div>
              <div>Available color: </div>
              <div>Available size: : </div>
              <div>Promotions: Free shipping</div>
            </div>
          </div>
        </div>
      </div>
      <Tabs value={valueTab} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Active" />
        <Tab label="Disabled" />
        <Tab label="Active" />
      </Tabs>
      
      <ImageFooter />
    </>
  )
}

export default ProductDetail