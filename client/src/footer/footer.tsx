import React, { FC, ReactNode } from "react"
import { Layout } from "antd"

import { PageButton } from "./../common/StyledComponents"
// import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styled from "styled-components"

const { Footer: FooterView } = Layout

// ⥣⥤
export const NextPage: FC<{ pageEvent: Function; component?: ReactNode | undefined | null; type: string }> = ({ pageEvent, component, type }) => {
  return (
    <>
      <FooterView
        style={{
          textAlign: "center",
          color: component ? "black" : "white",
          background: component ? "white" : "rgb(25,25,25)",
          cursor: "pointer",
          position: "fixed",
          bottom: 0,
          // top: type === "prev" ? 0 : "",
          width: "100%",
        }}
        onClick={() => {
          pageEvent()
        }}
      >
        <PageButton animation={true}>
          다음 페이지
          <br />⥥
        </PageButton>
      </FooterView>
    </>
  )
}

export const PrevPage: FC<{ pageEvent: Function; component?: ReactNode | undefined | null; type: string }> = ({ pageEvent, component, type }) => {
  return (
    <>
      <FooterView
        style={{
          textAlign: "center",
          color: component ? "black" : "white",
          background: component ? "white" : "rgb(25,25,25)",
          cursor: "pointer",
          position: "fixed",
          bottom: 100,
          top: "10%",
          width: "100%",
          height: "100px",
        }}
        onClick={() => {
          pageEvent()
        }}
      >
        <PageButton color={"black"}>
          ⥣ <br />
          이전 페이지
        </PageButton>
      </FooterView>
    </>
  )
}
