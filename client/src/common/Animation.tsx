import { keyframes } from "styled-components"
import React, { FC, ReactNode } from "react"
import "./style.css"
import { CSSTransition } from "react-transition-group"
import { Footer } from "./../footer"
import { ContentAbout } from "./../container/"
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

export const PageAnimation: FC<{ component: ReactNode; pageEvent: any }> = ({ component: Component, pageEvent }) => {
  return (
    <CSSTransition in={true} timeout={400} classNames="list-transition" unmountOnExit appear>
      <div className="list-body">
        {Component}
        {/* <Footer pageEvent={pageEvent} type={"next"} /> */}
      </div>
    </CSSTransition>
  )
}
