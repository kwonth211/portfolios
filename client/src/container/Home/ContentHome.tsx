import React, { FC } from "react"
import { Layout } from "antd"
import { ContentDiv, CenterDiv } from "../../common/StyledComponents"
import { PageComponent } from "./../../footer"
import useText from "./hooks/useText"
const { Content } = Layout
interface IPageButtion {
  animation?: boolean
}

const ContentHome: FC<{ pageEvent?: any }> = ({ pageEvent }) => {
  // 안녕하세요! <br />
  const text = useText()
  return (
    <>
      <Content>
        <ContentDiv>
          <CenterDiv fontSize={"17pt"}>{text}</CenterDiv>
        </ContentDiv>
        <PageComponent type={"next"} page={0} pageEvent={pageEvent} />
      </Content>
    </>
  )
}

export default ContentHome
