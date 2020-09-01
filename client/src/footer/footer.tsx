import React, { FC } from "react"
import { Layout } from "antd"

import { PageButton } from "./../common/StyledComponents"
// import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"

const { Footer: FooterView } = Layout
// ⥣⥤
const Footer: FC<{ pageEvent: Function; component?: JSX.Element | undefined | null }> = ({ pageEvent, component }) => {
  return (
    <>
      <FooterView
        style={{
          textAlign: "center",
          color: component ? "black" : "white",
          background: component ? "white" : "rgb(25,25,25)",
          // background: "white",
          cursor: "pointer",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
        onClick={() => {
          pageEvent()
        }}
      >
        <PageButton>
          다음 페이지
          <br />⥥
        </PageButton>
      </FooterView>
    </>
  )
}

export default Footer
