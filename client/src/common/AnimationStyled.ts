import styled, { css } from "styled-components"

interface AnimationBodyPrev {
  page: number
}

export const AnimationBodyNext = styled.div`
  position: absolute;
  top: 7%;
  z-index: 0;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  &.list-transition-enter,
  &.list-transition-appear {
    top: 99%;
    width: 100%;
    max-height: 70%;
  }
  &.list-transition-enter-active,
  &.list-transition-appear-active {
    top: 7%;
    height: 100%;
    width: 100%;
    max-height: 100%;
    background-color: white;
    transition: all 900ms;
  }
  &.list-transition-exit {
    top: 0%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    /* background-color: black; */
  }
  &.list-transition-exit-active {
    top: -90%;
    height: 0%;
    transition: all 1300ms;
  }
`
export const AnimationBodyPrev = styled.div<AnimationBodyPrev>`
  position: absolute;
  top: ${(props) => (props.page === 0 ? "-9.2%" : "0%")};
  z-index: 0;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  margin-top: 87px;
  overflow: hidden;

  &.list-transition2-enter,
  &.list-transition2-appear {
    /* 이 쪽이 애니메이션 */
    /*We give the list the initial dimension of the list button*/
    top: 99%;
    width: 100%;
    /* max-height: 80%; */
  }
  /* This is where we can add the transition*/
  &.list-transition2-enter-active,
  &.list-transition2-appear-active {
    top: ${(props) => (props.page === 0 ? "-9.2%" : "0%")};

    /* height: 90%; */
    width: 100%;
    /* max-height: 70%; */
    background-color: white;
    transition: all 800ms;
  }

  /* This fires as soon as the this.state.showList is false */
  &.list-transition2-exit {
    top: 0%;
    width: 100%;
    max-height: 90%;
    height: 100%;
  }
  &.list-transition2-exit-active {
    top: 100%;
    height: 0%;

    transition: all 1200ms;
  }
`
