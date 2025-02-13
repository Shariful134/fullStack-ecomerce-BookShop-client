import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import logoImg from "../../assets/image/logo-of-bookshop-removebg-preview.png";
import { sidebarGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths } from "../../routes/admine.routes";
import { TUser } from "../../types/type";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { UsersPaths } from "../../routes/User.routes";
import { homePaths } from "../../routes/home.routes";

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }

  if (!user || !user.role) {
    return null;
  }

  let sidebarItems;
  switch (user?.role) {
    case userRole?.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths, "admin");
      break;
    case userRole?.USER:
      sidebarItems = sidebarGenerator(UsersPaths, "user");
      break;

    default:
      sidebarItems = sidebarGenerator(homePaths);
      break;
  }
  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          height: "4rem",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "70%" }} src={logoImg} alt="" />
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
