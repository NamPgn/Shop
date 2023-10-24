import { Outlet } from "react-router-dom";

const Client = () => {
  return (
    <div>
      <header></header>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Client;
