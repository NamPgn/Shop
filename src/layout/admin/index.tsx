import { useState } from "react";
import {
  AlignCenterOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import MVLink from "../../components/Location/Link";
const { Header, Sider, Content } = Layout;
const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical bg-[#fff]"></div>
        <Menu
          className="h-full"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <MVLink to="/admin">Admin</MVLink>,
            },
            {
              key: "2",
              icon: <OrderedListOutlined />,
              label: <MVLink to="/admin/products">Products</MVLink>,
              children: [
                {
                  key: "3",
                  label: <MVLink to="/admin/products/size">Size</MVLink>,
                  icon: <FontSizeOutlined />,
                },
                {
                  key: "4",
                  label: <MVLink to="/admin/products/color">Color</MVLink>,
                  icon: <BgColorsOutlined />,
                },
                {
                  key: "a-6",
                  label: <MVLink to="/admin/productChild">ProductChild</MVLink>,
                  icon: <AlignCenterOutlined />,
                },
              ],
            },
            {
              key: "6",
              icon: <UsergroupAddOutlined />,
              label: <MVLink to="/admin/users">User</MVLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#cea3cb6b" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#cea3cb6b",
          }}
        >
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
