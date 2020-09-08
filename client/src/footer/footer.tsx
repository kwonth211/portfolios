import React, { FC, ReactNode, useEffect, useState } from "react"
import { Layout } from "antd"

import { PageButton } from "./../common/StyledComponents"
// import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styled from "styled-components"

const { Footer: FooterView } = Layout

interface IPageButton {
  page: number
  type: string
  delayFlag: boolean
}

const StyledContent = styled(FooterView)<IPageButton>`
  text-align: center;
  color: ${(props) => (props.delayFlag ? "black" : props.page < 1 ? "white" : "black")};
  background: ${(props) => (props.delayFlag ? "white" : props.page < 1 ? "rgb(25,25,25)" : "white")};
  margin-bottom: ${(props) => (props.type === "prev" ? "60px" : "")};
  cursor: pointer;
  z-index: 0;
  width: 100%;
`

// ⥣⥤
export const PageComponent: FC<{ pageEvent: any; type: string; page: number }> = ({ pageEvent, type, page }) => {
  let [delayFlag, setDelayFlag] = useState(false)

  useEffect(() => {
    if (type === "prev") {
      setTimeout(() => {
        setDelayFlag(true)
      }, 1000)
    }
  }, [])

  return (
    <>
      <StyledContent
        page={page}
        type={type}
        delayFlag={delayFlag}
        onClick={() => {
          pageEvent("next")
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
