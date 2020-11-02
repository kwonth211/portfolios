import styled, { keyframes } from "styled-components";

const gradientBG = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GradientStyled = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  font-family: "Exo", sans-serif;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradientBG 10s ease infinite;
  animation: ${gradientBG} 10s ease infinite;
`;
