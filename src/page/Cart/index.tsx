import { useState } from "react";
import ImageFooter from "../../components/ImageFooter"
import { Rating, Typography } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./style/index.css";
import TextField from '@mui/material/TextField';
import Dividers from "../../admin/ui/Divider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Cart = () => {
  const [value, setValue] = useState<number | null>(2);
  const [age, setAge] = useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="mt-[40px]">
      <div className="container">
        <div className="shop__cart__table">
          <table>
            <thead>
              <tr className="text-[20px] uppercase">
                <th className="checker p-5">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="text-start py-[20px]">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="m-4">
              <tr>
                <td className="checker text-center">
                  <input type="checkbox" name="" id="" />
                </td>
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
                <td className="cart__price text-center">$ 150.0</td>
                <td className="cart__quantity">
                  <div className="pro-qty"><span className="dec qtybtn">-</span>
                    <input type="text" value="1" />
                    <span className="inc qtybtn">+</span></div>
                </td>
                <td className="cart__total text-center">$ 300.0</td>
                <td className="text-[20px] hover:cursor-pointer">
                  <CloseCircleOutlined />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart__btn mt-[50px]">
          <a href="#">Continue Shopping</a>
        </div>
        <div className="flex justify-between mt-[50px] gap-5">
          <form className="w-9/12">
            <Typography variant="h5">Thông tin nhận hàng</Typography>
            <Dividers />
            <div className="flex gap-2 mb-[40px]" >
              <div className="w-6/12">
                <TextField
                  className="w-full"
                  id="outlined-required"
                  label="Họ"
                  defaultValue="Phạm"
                />
              </div>
              <div className="w-6/12">
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Tên"
                  defaultValue="Nam"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-6/12">
                <TextField
                  className="w-full"
                  id="outlined-required"
                  label="Email"
                  defaultValue="nampg@gmail.com"
                />
              </div>
              <div className="w-6/12">
                <TextField
                  className="w-full"
                  id="outlined-required"
                  label="Số điẹn thoại"
                  defaultValue="0123456789"
                />
              </div>
            </div>
            <div className="mt-5">
              <InputLabel id="demo-simple-select-label">Tỉnh/ Thành Phố</InputLabel>
              <Select
                className="w-full"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
            <div className="flex gap-2 mt-5">
              <div className="w-6/12">
                <InputLabel id="demo-simple-select-label">Tỉnh/ Thành Phố</InputLabel>
                <Select
                  className="w-full"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div className="w-6/12">
                <InputLabel id="demo-simple-select-label">Tỉnh/ Thành Phố</InputLabel>
                <Select
                  className="w-full"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>

          </form>
          <div className="cart__total__procced w-3/12">
            <h6>Cart total</h6>
            <ul>
              <li className="flex justify-between">Subtotal <span>$ 750.0</span></li>
              <li className="flex justify-between">Total <span>$ 750.0</span></li>
            </ul>
            <a href="#" className="primary-btn">Proceed to checkout</a>
          </div>
        </div>
      </div>
      <ImageFooter />
    </div>
  )
}

export default Cart