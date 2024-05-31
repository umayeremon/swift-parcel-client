import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Layout;