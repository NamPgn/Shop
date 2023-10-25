import Feature from "../../components/Feature"
import ImageFooter from "../../components/ImageFooter"
import ListImage from "../../components/ListImage"
import ListProduct from "../../components/ListProduct"
import SellTime from "../../components/SellTime"
import MySliders from "../../components/Slider"

const Home = () => {
  return (
    <>
      <ListImage />
      <ListProduct/>
      <MySliders/>
      <Feature/>
      <SellTime/>
      <ImageFooter/>
    </>
  )
}

export default Home