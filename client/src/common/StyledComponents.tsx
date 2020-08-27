import styled from "styled-components"

interface IContentDiv {
  minHeight: string
}
export const ContentDiv = styled.div<IContentDiv>`
  background: #fff;
  padding: 24px;
  -webkit-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);
  -moz-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);
  box-shadow: 0 10px 6px -6px rgb(221, 221, 221);
  min-height: ${(props: IContentDiv) => props.minHeight};
`
