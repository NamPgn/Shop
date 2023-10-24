
export default function ImageLayout() {

	// Một mảng chứa URL hình ảnh từ API
	const itemData = [
		{
			img: 'https://cdn.tgdd.vn/2020/07/content/bo-anh-yasuo-lol-dep-va-chat-de-lam-hinh-nen-dien-thoai-may1-800x450.jpg',
			title: 'Breakfast',
		},
		{
			img: 'https://inkythuatso.com/uploads/thumbnails/800/2022/03/yasuo-chan-long-kiem-16-10-58-26.jpg',
			title: 'Burger',
		},
		{
			img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
			title: 'Camera',
		},
		{
			img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
			title: 'Coffee',
		},
		{
			img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
			title: 'Hats',
		},
	];

	return (
		<div className='flex'>
			<div className='w-6/12 p-2'>
				<img className="w-full, h-full" src={itemData[0].img} />
			</div>
			<div className='w-6/12'>
				<div style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)"
				}}>
					{itemData.slice(1, 5).map((item, index) => {
						return <img className="w-full h-full p-2" src={item.img} />
					})}
				</div>
			</div>
		</div>
	);
}

