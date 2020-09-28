import React, { FC, useEffect } from "react"
import { Layout, Menu } from "antd"
import { GithubOutlined } from "@ant-design/icons"
const { Header: Head } = Layout

const Header: FC<{ page: number }> = ({ page }) => {
  useEffect(() => {
    // setTimeout(() => {
    //   setObj({ background: "white" })
    // }, 800)
  }, [])

  return (
    <Layout className="layout" style={{ position: "absolute", width: "100%", top: 0, float: "right" }}>
      <Head style={{ display: page === 0 ? "none" : "", background: "white", zIndex: 1 }}>
        {/* <Logo></Logo> */}
        <Menu style={{ paddingLeft: "10px", paddingRight: "10px", float: "right", color: "black", opacity: "0.5", zIndex: 1, borderRadius: "100px 100px 100px 100px" }} theme="light" mode="horizontal" selectedKeys={[(page + 1).toString()]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Skill</Menu.Item>
          <Menu.Item key="4">Project</Menu.Item>
          <Menu.Item key="5">Contact</Menu.Item>
          <div
            onClick={() => {
              window.open("https://github.com/kwonth211/newstart")
            }}
            style={{ display: "inline", float: "right", marginLeft: "120px", cursor: "pointer" }}
          >
            <GithubOutlined style={{ fontSize: "22px" }}></GithubOutlined> GitHub
          </div>
          {/* </Menu.Item> */}
        </Menu>
      </Head>
    </Layout>
  )
}
export default Header
