import React, { FC, useState, useEffect, useRef } from "react"
import { Layout } from "antd"
import { ContentDiv, CenterDiv } from "../../common/StyledComponents"
import { PageComponent } from "./../../footer"
import Typist from "react-typist"
import { buttonFade } from "./../../common/Animation"
import styled from "styled-components"

const { Content } = Layout
interface IPageButtion {
  animation?: boolean
}

export const Cursor = styled.span`
  background: inherit;
  border: 0px;
  z-index: 1;
  cursor: pointer;
  font-size: 20pt;
  animation: ${buttonFade} 300ms steps(5, start) infinite alternate;
`

const ContentHome: FC<{ pageEvent: any }> = ({ pageEvent }) => {
  let [text, setText] = useState<any>([])
  const interval = useRef<any>()
  let helloText = "안녕하세요.".split("").reverse()
  let introduceText = "저는 <FrontEnd/> 개발자 권태훈 입니다.".split("").reverse()
  useEffect(() => {
    setTimeout(() => {
      interval.current = setInterval(() => {
        if (helloText.length > 0) {
          text = text.concat(helloText.pop() || "")
        } else {
          //
          if (helloText.length === 0 && introduceText.length === 0) {
            text = text.concat(<br />)
          }
          text = text.concat(introduceText.pop() || "")
          if (introduceText.length === 0) clearInterval(interval.current)
        }
        setText(text)
      }, 80)
    }, 1000)

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  // 안녕하세요! <br />
  return (
    <>
      <Content>
        <ContentDiv>
          <CenterDiv fontSize={"17pt"}>
            {text}
            <Cursor>|</Cursor>
          </CenterDiv>
        </ContentDiv>
        <PageComponent type={"next"} page={0} pageEvent={pageEvent} />
      </Content>
    </>
  )
}

export default ContentHome
