import React, { FC, useEffect, useState } from "react"
import { Layout } from "antd"

import { PageButton } from "./../common/StyledComponents"
// import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styled from "styled-components"

const { Footer: FooterView } = Layout

interface IPageButton {
  page: number
  type: string
  delayFlag: boolean
  firstFlag: boolean
}

const StyledContent = styled(FooterView)<IPageButton>`
  text-align: center;
  color: ${(props) => (props.delayFlag && props.page < 1 ? "white" : "black")};
  background: ${(props) => {
    let background
    const { firstFlag, page, delayFlag } = props
    if (firstFlag && page === 0) {
      background = "rgb(25,25,25)"
    }
    if (page === 0) {
      if (!firstFlag) {
        if (delayFlag) {
          background = "rgb(25,25,25)"
        } else {
          background = "white"
        }
      }
    } else {
      background = "white"
    }

    return background
  }};
  margin-bottom: ${(props) => (props.type === "prev" ? "" : "")};
  cursor: pointer;
  z-index: 0;
  border: ${(props) => (props.page !== 0 ? "1px solid rgb(238,238,238)" : "")};
  display: ${(props) => (props.page === 0 && props.type === "prev" ? "none" : "")};
  ${(props) => (props.type === "next" ? "bottom:0;position:fixed;" : "")};
  width: 100%;
  padding: 12px 50px 12px 50px;
`

// ⥣⥤
let firstFlag = true
export const PageComponent: FC<{ pageEvent: any; type: string; page: number }> = ({ pageEvent, type, page }) => {
  let [delayFlag, setDelayFlag] = useState(false)
  // let [firstFlag, setFirstFlag] = useState(true)
  useEffect(() => {
    if (type === "next" && page === 0) {
      setTimeout(() => {
        setDelayFlag(true)
      }, 750)
    }
  }, [])

  return (
    <>
      <StyledContent
        page={page}
        type={type}
        firstFlag={firstFlag}
        delayFlag={delayFlag}
        onClick={(e) => {
          const element = e.currentTarget as HTMLDivElement
          let key = element.innerText.includes("다음") ? "next" : "prev"
          pageEvent(key)
          firstFlag = false
        }}
      >
        {type === "prev" ? (
          <PageButton>
            ⥣ <br />
            이전 페이지
          </PageButton>
        ) : (
          <PageButton animation={true}>
            다음 페이지
            <br />⥥
          </PageButton>
        )}
      </StyledContent>
    </>
  )
}
