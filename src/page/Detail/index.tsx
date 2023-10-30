import React, { useState } from "react";
import ImageFooter from "../../components/ImageFooter";
import { Box, Rating, Tab, Tabs, Typography } from "@mui/material";
import { HeartOutlined, MenuOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import ProductOther from "../../components/ProductOther";
function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ProductDetail = () => {
  const [value, setValue] = useState<number | null>(2);
  const [valueTab, setValueTab] = React.useState(2);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <React.Fragment>
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
                onChange={(_event, newValue) => {
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
              <div>
                <Typography>Availability: </Typography>
              </div>
              <div>
                <Typography>Available color: </Typography>
              </div>
              <div>
                <Typography>Available size: : </Typography>
              </div>
              <Typography>Promotions: Free shipping</Typography>
            </div>
          </div>
        </div>
        <Box marginTop={'50px'}>
          <Tabs value={valueTab} centered onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Active" />
            <Tab label="Disabled" />
            <Tab label="Active" />
          </Tabs>
          <CustomTabPanel value={valueTab} index={0}>
            <Typography>Description 1</Typography>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </CustomTabPanel>
          <CustomTabPanel value={valueTab} index={1}>
            <Typography>Description 2</Typography>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </CustomTabPanel>
          <CustomTabPanel value={valueTab} index={2}>
            <Typography>Description 3</Typography>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.

            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </CustomTabPanel>
        </Box>
        <ProductOther />
      </div>
      <ImageFooter />
    </React.Fragment>
  )
}

export default ProductDetail