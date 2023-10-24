import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Client = () => {
  return (
    <div className="w-full">
      <Header/>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Client;
