import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <h1 className="text-4xl text-red-500">Hello</h1>
      <Footer></Footer>
    </div>
  );
};

export default Main;
