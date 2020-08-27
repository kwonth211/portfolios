import React, { FC } from "react"
import { Layout, Menu } from "antd"
import { GithubOutlined } from "@ant-design/icons"
import styled from "styled-components"
const { Header: Head } = Layout

const Logo = styled.div`
  width: 120px;
  height: 31px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 20px 16px 0;
  float: left;
  bottom: 50%;
  display: inline-block;
`

const Header: FC = () => {
  return (
    <Layout className="layout">
      <Head>
        <Logo></Logo>
        <Menu style={{ float: "right" }} theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Skill</Menu.Item>
          <Menu.Item key="4">Project</Menu.Item>
          <Menu.Item key="5">Contact</Menu.Item>
          <div style={{ display: "inline", float: "right", marginLeft: "120px", cursor: "pointer" }}>
            <GithubOutlined style={{ fontSize: "22px" }}></GithubOutlined> GitHub
          </div>
          {/* </Menu.Item> */}
        </Menu>
      </Head>
    </Layout>
  )
}
export default Header
