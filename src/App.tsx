import { useRoutes } from "react-router-dom";
import "./App.css";
import { router } from "./router";

function App() {
  const Routes = useRoutes(router);
  return <main className="main">{Routes}</main>;
}

export default App;
