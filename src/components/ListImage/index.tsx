import { ArrowRightOutlined } from "@ant-design/icons";
import "./style/index.css";
export default function ImageLayout() {
  // Một mảng chứa URL hình ảnh từ API
  const itemData = [
    {
      img: "/img/blog-2.jpg",
      title: "Breakfast",
    },
    {
      img: "/img/blog-3.jpg",
      title: "Burger",
    },
    {
      img: "/img/blog-4.jpg",
      title: "Camera",
    },
    {
      img: "/img/blog-8.jpg",
      title: "Coffee",
    },
    {
      img: "/img/blog-10.jpg",
      title: "Hats",
    },
  ];

  return (
    <div className="flex">
      <div className="w-6/12 p-2 relative">
        <img className="w-full, h-full" src={itemData[0].img} />
        <div className="absolute top-1/2 left-0 p-5">
          <div className="font-medium text-[30px] text-[#ffbb6a]">
            Women’s fashion
          </div>
          <p className="text-[#999]">
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incidid-unt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <div className="flex items-center gap-1 text-[15px]">
            <div className="underline">Show now</div>
            <div>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {itemData.slice(1, 5).map((item, index) => {
            return (
              <div className="relative">
                <img key={index} className="w-full h-full p-2" src={item.img} />
                <div className="absolute top-1/2 left-0 p-5">
                  <div className="font-medium text-[30px] text-[#ffbb6a]">
                   {item.title}
                  </div>
                  <div className="flex items-center gap-1 text-[15px]">
                    <div className="underline">
                      Show now
                    </div>
                    <div>
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
