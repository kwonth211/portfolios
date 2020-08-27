import React, { FC } from "react"
import { Layout, Breadcrumb } from "antd"
import { ContentDiv } from "../../common/StyledComponents"

const { Content } = Layout

const ContentAbout: FC = () => {
  return (
    <Content style={{ padding: "0 50px", width: "50%", margin: "0 auto" }}>
      <Breadcrumb style={{ textAlign: "center", fontSize: "16pt", fontWeight: "bold", margin: "16px 0" }}>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <ContentDiv minHeight="240px">Content</ContentDiv>
    </Content>
  )
}

export default ContentAbout
