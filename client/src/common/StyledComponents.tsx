import styled, { css, keyframes } from "styled-components";
import { buttonFade } from "./animation/AnimationNext";

interface IContentDiv {}

interface ICursor {
  children: any;
}
interface ICenterDiv {
  // left: string
  // top: string
  fontSize: string;
}

interface IPageButtion {
  animation?: boolean;
}
export const ContentDiv = styled.div<IContentDiv>`
  background: rgb(25, 25, 25);
  width: 100vw;
  height: 100vh;
  -webkit-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);
  -moz-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);
  box-shadow: 0 10px 6px -6px rgb(221, 221, 221);
`;
export const CenterDiv = styled.div`
  color: white;
  font-size: ${(props: ICenterDiv) => props.fontSize};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  display: block;
  width: 100%;
  height: 150px;
  line-height: 50px;
`;

export const PageButton = styled.button<IPageButtion>`
  background: inherit;
  border: 0px;
  z-index: 1;
  cursor: pointer;
  ${(props) =>
    props.animation &&
    css`
      animation: ${buttonFade} 300ms steps(5, start) infinite alternate;
    `}
`;

export const Cursor = styled.span<ICursor>`
  background: inherit;
  border: 0px;
  z-index: 1;
  cursor: pointer;
  font-size: 20pt;
  ${(props) => {
    return css`
      animation: ${buttonFade} 300ms steps(5, start) infinite alternate;
    `;
  }}
`;
