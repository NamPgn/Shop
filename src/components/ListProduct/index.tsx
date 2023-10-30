import { Rating, Typography } from '@mui/material';
import { useState } from 'react';

const ListProduct = () => {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [value, setValue] = useState<number | null>(2);
  const handleCategoryClick = (category: any) => {
    setCurrentCategory(category);
  };

  const filterProducts = (product: any) => {
    if (currentCategory === 'All') {
      return true;
    } else {
      return product.category === currentCategory;
    }
  };

  const list = [
    { name: 'Product 1', category: 'All' },
    { name: 'Product 2', category: 'Women’s' },
    { name: 'Product 3', category: 'Men’s' },
    { name: 'Product 4', category: 'Kid’s' },
    { name: 'Product 5', category: 'Accessories' },
    { name: 'Product 6', category: 'Cosmetics' }
  ];

  return (
    <div className="container">
      <div className='mt-[40px]'>
      <div className='flex items-center'>
        <Typography variant="h5" className='w-6/12'>NEW PRODUCT</Typography>
        <div className="options w-6/12">
          <ul className='flex gap-[25px] justify-center'>
            <li onClick={() => handleCategoryClick('All')}>All</li>
            <li onClick={() => handleCategoryClick('Women’s')}>Women’s</li>
            <li onClick={() => handleCategoryClick('Men’s')}>Men’s</li>
            <li onClick={() => handleCategoryClick('Kid’s')}>Kid’s</li>
            <li onClick={() => handleCategoryClick('Accessories')}>Accessories</li>
            <li onClick={() => handleCategoryClick('Cosmetics')}>Cosmetics</li>
          </ul>
        </div>
      </div>
      <div className='mt-5 text-center grid_product gap-5'>
        {list.filter(filterProducts).map((item, index) => {
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
                onChange={(_event, newValue) => {
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
  );
};

export default ListProduct;