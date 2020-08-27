import React, { FC } from "react"
import { Layout, Breadcrumb } from "antd"
import { ContentDiv } from "../../common/StyledComponents"
const { Content } = Layout
const ContentHome: FC = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ textAlign: "center", fontSize: "16pt", fontWeight: "bold", margin: "16px 0" }}>
        <Breadcrumb.Item>History</Breadcrumb.Item>
      </Breadcrumb>
      <ContentDiv minHeight={"400px"}>Content</ContentDiv>
    </Content>
  )
}

export default ContentHome
