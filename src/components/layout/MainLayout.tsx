import { Button, Flex, Layout } from "antd";
import Sidebar from "./Sidebar";
import { Link, Outlet, useNavigate } from "react-router";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "../../types/type";

import logoImg from "../../assets/image/logo-of-bookshop-removebg-preview.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token) as TUser;
  }

  const handlLogOut = () => {
    dispatch(logout());
  };
  const handlLogIn = () => {
    navigate("/login");
  };
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Layout>
        <Header
          style={{
            padding: "0",
            top: "0",
            left: "0",
            position: "sticky",
            zIndex: "1",
          }}
        >
          {user?.role ? (
            <Flex
              style={{
                height: "4rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Button onClick={handlLogOut}>LogOut</Button>
              <Link to="/my-cart">
                <Button style={{ marginLeft: 5 }}>
                  My Cart
                  <ShoppingCartOutlined />
                </Button>
              </Link>
            </Flex>
          ) : (
            <Flex
              justify="start"
              align="center"
              style={{ flexWrap: "wrap", gap: "20px", marginLeft: "40px" }}
            >
              <img
                style={{ width: "100%", maxWidth: "130px", height: "auto" }}
                src={logoImg}
                alt="logo"
              />

              <Button onClick={handlLogIn}>LogIn</Button>
              <Link to="/my-cart">
                <Button style={{ marginLeft: 5 }}>
                  My Cart
                  <ShoppingCartOutlined />
                </Button>
              </Link>
            </Flex>
          )}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
