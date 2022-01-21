/** @format */

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  FileAddOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../style/login.css";
import { useAuthDispatch, logout, useAuthState } from "../context";
// import { Children } from "react";
const Dashborad = ({ children }) => {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  // const userDetails = useAuthState();
  const { Header, Sider, Content, Footer } = Layout;
  const [collapsed, setcollapsed] = useState(false);
  const toggle = () => {
    setcollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
          <Menu.Item className='out' key='1' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item className='out' key='2' icon={<FileAddOutlined />}>
            <Link to='/newregister'>Habitaciones</Link>
          </Menu.Item>
          <Menu.Item
            className='out'
            key='3'
            onClick={() => {
              logout(dispatch); //call the logout action
              <Redirect to='/login' />;
              // window.history.push("/login"); //navigate to logout page on logout
              // setToken(null);?
            }}
            icon={<LogoutOutlined />}>
            <Link to='/login'>log out</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
              style: {
                fontSize: "30px",
                margin: "10px",
                alignItems: "center"
              }
            }
          )}
        </Header>
        <Breadcrumb
          style={{
            margin: "16px 0",
            display: "flex",
            flexDirection: "row",
            marginLeft: "20px"
          }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>
            <div>Admin</div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className='site-layout-background'
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            maxHeight: "100%"
          }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>creado por un inutil</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashborad;
