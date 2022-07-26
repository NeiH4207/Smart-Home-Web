import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./menu.css";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import { NavLink, useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Menus(props) {
  const { children } = props;
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState("220");
  const [current, setCurrent] = useState("mail");

  let keyMenu;
  let tmp = window.location.pathname;
  let tmpArr = tmp.split("/");
  keyMenu = `/${tmpArr[1]}`;
  console.log("key ", keyMenu, ", ", tmpArr);

  const onCollapse = (collapse, type) => {
    // console.log("co:"+collapse+", type: "+type);
    setCollapsed(collapse);
    if (collapse) {
      setMarginLeft("100");
    } else {
      setMarginLeft("220");
    }
  };
  console.log("location ", [window.location.pathname]);

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setCurrent(event.key);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    history.push("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectable={false}
          selectedKeys={[keyMenu]}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <NavLink to="/">Trang chủ</NavLink>
          </Menu.Item>
          <Menu.Item key="/rooms" icon={<FileOutlined />}>
            <NavLink to="/rooms">Phòng</NavLink>
          </Menu.Item>
          <Menu.Item key="/deveices" icon={<DesktopOutlined />}>
            <NavLink to="/deveices">Thiết bị</NavLink>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <NavLink to="/profile">Thông tin nhóm</NavLink>
          </Menu.Item>
         
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{}}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "20px",
              marginTop: "0px",
            }}
          >
            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <SubMenu
                key="SubMenu"
                icon={
                  <IconButton aria-label="settings" onClick={handleClick}>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </IconButton>
                }
                // title="Navigation Three - Submenu"
                style={{ background: "none !important" }}
              >
                <Menu.Item key="setting:1" onClick={handleLogout}>
                  Log out
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Header>
        {/* background: '#001529' */}
        <Content style={{ margin: "0 16px", marginLeft: `${marginLeft}px` }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item> </Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center"}}  style={{ marginLeft: "800px"}} >
		<b style={{ fontSize: "20px"}} >NHÓM 13</b>
		</Footer>
      </Layout>
    </Layout>
  );
}

export default Menus;
