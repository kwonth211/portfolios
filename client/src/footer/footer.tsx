import React, { FC, useEffect, useState } from "react";
import { Layout } from "antd";

import { PageButton } from "./../common/StyledComponents";
// import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styled from "styled-components";

const { Footer: FooterView } = Layout;

interface IPageButton {
  page: number;
  type: string;
  delayFlag: boolean;
  firstFlag: boolean;
}

const StyledContent = styled(FooterView)<IPageButton>`
  text-align: center;
  margin-bottom: ${(props) => (props.type === "prev" ? "" : "")};
  cursor: pointer;
  z-index: 0;
  border: ${(props) => (props.page !== 0 ? "1px solid rgb(238,238,238)" : "")};
  ${(props) => (props.type === "next" ? "bottom:0;position:fixed;" : "")};
  background: ${(props) => (props.page === 0 ? "rgb(25, 25, 25);" : "white;")};
  color: ${(props) => (props.page === 0 ? "white;" : "black;")};
  width: 100%;
  padding: 12px 50px 12px 50px;
`;

// ⥣⥤
let firstFlag = true;
export const PageComponent: FC<{
  pageEvent: any;
  type: string;
  page: number;
}> = ({ pageEvent, type, page }) => {
  let [delayFlag, setDelayFlag] = useState(false);
  // let [firstFlag, setFirstFlag] = useState(true)
  useEffect(() => {
    if (type === "next" && page === 0) {
      setTimeout(() => {
        // setDelayFlag(true);
      }, 750);
    }
  }, []);

  return (
    <>
      <StyledContent
        page={page}
        type={type}
        firstFlag={firstFlag}
        delayFlag={delayFlag}
        onClick={(e) => {
          const element = e.currentTarget as HTMLDivElement;
          let key =
            element.innerText.includes("다음") || element.innerText === ""
              ? "next"
              : "prev";
          pageEvent(key);
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
  );
};
