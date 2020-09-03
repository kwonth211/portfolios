import React, { FC } from "react"
import { Layout } from "antd"

import { PageButton } from "./../common/StyledComponents"
// import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styled from "styled-components"

const { Footer: FooterView } = Layout

// ⥣⥤
const Footer: FC<{ pageEvent: Function; component?: JSX.Element | undefined | null; type: string }> = ({ pageEvent, component, type }) => {
  return (
    <>
      <FooterView
        style={{
          textAlign: "center",
          color: component || type === "prev" ? "black" : "white",
          background: component || type === "prev" ? "white" : "rgb(25,25,25)",
          cursor: "pointer",
          position: type === "prev" ? "unset" : "fixed",
          bottom: type === "prev" ? "" : 0,
          top: type === "prev" ? 0 : "",
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
