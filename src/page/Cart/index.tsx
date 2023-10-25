import { useState } from "react";
import ImageFooter from "../../components/ImageFooter"
import { Rating, Typography } from "@mui/material";
import { Divider } from "antd";
const Cart = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <div className="mt-[40px]">
      <div className="container">
        <div className="shop__cart__table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart__product__item flex gap-2 items-center">
                  <div className="w-2/12 h-24">
                    <img src="https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg" alt="" />
                  </div>
                  <div className="cart__product__item__title">
                    <Typography variant="h6">Chain bucket bag</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                </td>
                <td className="cart__price">$ 150.0</td>
                <td className="cart__quantity">
                  <div className="pro-qty"><span className="dec qtybtn">-</span>
                    <input type="text" value="1" />
                    <span className="inc qtybtn">+</span></div>
                </td>
                <td className="cart__total">$ 300.0</td>
                <td className="cart__close"><span className="icon_close"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ImageFooter />
    </div>
  )
}

export default Cart