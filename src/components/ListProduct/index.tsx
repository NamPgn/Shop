import React from 'react'
import Typography from '@mui/material/Typography';
const ListProduct = () => {
  return (
    <div className='container '>
      <div className='mt-[40px]'>
        <div className='flex items-center'>
          <Typography variant="h5" className='w-6/12'>NEW PRODUCT</Typography>
          <div className="options  w-6/12">
            <ul className='flex gap-[25px] justify-center'>
              <li>All</li>
              <li>Women’s</li>
              <li>Men’s</li>
              <li>Kid’s</li>
              <li>Accessories</li>
              <li>Cosmetics</li>
            </ul>
          </div>
        </div>
        <div className='mt-5 w-3/12 text-center'>
          <div className="image">
            <img src="https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg" alt="" />
          </div>
          <div className="title">
            Buttons tweed blazer
          </div>
          <div className="vote">

          </div>
          <div className="price">
            $ 59.0
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct