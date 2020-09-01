import styled, { keyframes } from "styled-components"
import { TransitionGroup } from "react-transition-group"
import React, { FC } from "react"
import "./style.css"
// import { ReactCSSTransitionGroup } from "react-addons-css-transition-group"
// import { CSSTransitionGroup } from "react-addons-css-transition-group"
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { CSSTransition } from "react-transition-group"
import { Footer } from "./../footer"
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
export const buttonFade = keyframes`
    from {
        visibility: visibility;
    }
    to {
        visibility: hidden;
    }
    from {
        visibility: visibility;
    }
    to {
        visibility: hidden;
    }
    `

export const PageAnimation: FC<{ component: any; pageEvent: any }> = ({ component: Component, pageEvent }) => {
  return (
    <CSSTransition in={true} timeout={400} classNames="list-transition" unmountOnExit appear>
      <>
        {Component}
        <Footer pageEvent={pageEvent} />
      </>
    </CSSTransition>
  )
}
