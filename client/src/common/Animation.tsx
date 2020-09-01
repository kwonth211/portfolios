import { keyframes } from "styled-components"
import React, { FC } from "react"
import "./style.css"
import { CSSTransition } from "react-transition-group"
import { Footer } from "./../footer"
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
