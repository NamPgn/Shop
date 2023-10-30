import { Checkbox, FormControlLabel, FormGroup, InputLabel, MenuItem, Pagination, Rating, Select, Typography } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumbs";
import "./style/index.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import Title from "../../components/Title";
const data = [
  {
    name: "Women",
    children: [
      {
        title: "Coats"
      },
      {
        title: "Jackets"
      },
      {
        title: "Dresses"
      },
      {
        title: "Shirts"
      },
      {
        title: "T-shirts"
      },
      {
        title: "Jeans"
      },
    ]
  },
  {
    name: "Men",
    children: [
      {
        title: "Coats"
      },
      {
        title: "Jackets"
      },
      {
        title: "Dresses"
      },
      {
        title: "Shirts"
      },
      {
        title: "T-shirts"
      },
      {
        title: "Jeans"
      },
    ]
  },
  {
    name: "Kids",
    children: [
      {
        title: "Coats"
      },
      {
        title: "Jackets"
      },
      {
        title: "Dresses"
      },
      {
        title: "Shirts"
      },
      {
        title: "T-shirts"
      },
      {
        title: "Jeans"
      },
    ]
  },
  {
    name: "Accessories",
    children: [
      {
        title: "Coats"
      },
      {
        title: "Jackets"
      },
      {
        title: "Dresses"
      },
      {
        title: "Shirts"
      },
      {
        title: "T-shirts"
      },
      {
        title: "Jeans"
      },
    ]
  },
  {
    name: "Cosmetic",
    children: [
      {
        title: "Coats"
      },
      {
        title: "Jackets"
      },
      {
        title: "Dresses"
      },
      {
        title: "Shirts"
      },
      {
        title: "T-shirts"
      },
      {
        title: "Jeans"
      },
    ]
  },
]
const list = [
  { name: 'Product 1', category: 'All' },
  { name: 'Product 2', category: 'Women’s' },
  { name: 'Product 3', category: 'Men’s' },
  { name: 'Product 4', category: 'Kid’s' },
  { name: 'Product 5', category: 'Accessories' },
  { name: 'Product 6', category: 'Cosmetics' }
];
const ProductPage = () => {
  const [age, setAge] = useState("");
  const [value, setValue] = useState<number | null>(2);
  // const [check, setCheck] = useState(false);
  const handleChange = (e: any) => {
    setAge(e.target.value);
  }
  // const handleChangeCheked = (e: any) => {
  //   setCheck(e.target.value)
  // }
  return <>
    <div className="container">
      <Breadcrumb href={"/product"} to={"Product"} />
      <div className="products flex gap-5">
        <div className="w-3/12">
          <Title variant="h6">CATEGORIES</Title>
          <div>
            {
              data && data.map((item, _) => {
                return <Accordion key={_} style={{
                  border: "none",
                  boxShadow: "none"
                }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.name}</Typography>
                  </AccordionSummary>
                  {
                    item.children.map((i, v) => (
                      <AccordionDetails key={v}>
                        <Typography>
                          {"- " + i.title}
                        </Typography>
                      </AccordionDetails>
                    ))
                  }
                </Accordion>
              })
            }
          </div>
          <Title variant="h6">SHOP BY PRICE</Title>
          <div className="mx-2 my-5">
            <InputLabel id="demo-simple-select-label">Price: $33 - {age}</InputLabel>
            <Select
              size="small"
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
          <Title>SHOP BY SIZE</Title>
          <div className="mx-2 my-5">
            <FormGroup>
              <FormControlLabel control={<Checkbox size="small" />} label="XL" />
              <FormControlLabel control={<Checkbox size="small" />} label="L" />
              <FormControlLabel control={<Checkbox size="small" />} label="M" />
              <FormControlLabel control={<Checkbox size="small" />} label="S" />
            </FormGroup>
          </div>
          <Title>SHOP BY Color</Title>
          <div className="mx-2 my-5">
            <FormGroup>
              <FormControlLabel control={<Checkbox size="small" />} label="Blacks" />
              <FormControlLabel control={<Checkbox size="small" />} label="Whites" />
              <FormControlLabel control={<Checkbox size="small" />} label="Reds" />
              <FormControlLabel control={<Checkbox size="small" />} label="Greys" />
              <FormControlLabel control={<Checkbox size="small" />} label="Blues" />
              <FormControlLabel control={<Checkbox size="small" />} label="Beige Tones" />
              <FormControlLabel control={<Checkbox size="small" />} label="Greens" />
              <FormControlLabel control={<Checkbox size="small" />} label="Yellows" />
            </FormGroup>
          </div>
          <div>
          </div>
        </div>
        <div className="w-9/12">
          <div className='mt-5 text-center grid_product gap-5'>
            {list.map((item, index) => {
              return (
                <div key={index} >
                  <div className="image h-[400px]">
                    <img src="https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg" alt="" />
                  </div>
                  <div className="title m-3">
                    {item.name}
                  </div>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(_event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <div className="price font-medium">
                    $ 59.0
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination className="justify-center flex mt-[50px]" count={10} />
        </div>
        <div>
        </div>
      </div>
    </div>
  </>
}

export default ProductPage