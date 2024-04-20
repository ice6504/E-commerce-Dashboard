import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";

function Layout() {
  return (
    <>
      <Drawer>
        <Outlet />
      </Drawer>
    </>
  );
}

export default Layout;
