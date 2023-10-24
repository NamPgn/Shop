import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Client = () => {
  return (
    <div className="w-full">
      <Header/>
      <Outlet />
      
      <Footer></Footer>
    </div>
  );
};

export default Client;
