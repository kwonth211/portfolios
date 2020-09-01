import React, { FC } from "react"
import { Layout } from "antd"
import { ContentDiv, CenterDiv } from "../../common/StyledComponents"
const { Content } = Layout
const ContentHome: FC = () => {
  return (
    <Content>
      {/* <Breadcrumb style={{ textAlign: "center", fontSize: "16pt", fontWeight: "bold" }}>
        <Breadcrumb.Item>History</Breadcrumb.Item>
      </Breadcrumb> */}
      <ContentDiv minHeight={"400px"}>
        <CenterDiv left={"48%"} top={"45%"} fontSize={"17pt"}>
          안녕하세요! <br />
          <div style={{ fontSize: "19pt" }}>{"<Frontend/>"} 개발자 권태훈 포트폴리오 웹사이트입니다.</div>
        </CenterDiv>
      </ContentDiv>
    </Content>
  )
}

export default ContentHome
