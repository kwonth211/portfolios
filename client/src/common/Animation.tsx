import { keyframes } from "styled-components"
import React, { FC, ReactNode, useEffect } from "react"
import "./style.css"
import { CSSTransition } from "react-transition-group"
import { NextPage, PrevPage } from "./../footer"
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

/// animation padding 지우기..
export const PageAnimation: FC<{ component: ReactNode; pageEvent: any }> = ({ component: Component, pageEvent }) => {
  useEffect(() => {
    console.log(Component)
    debugger
  }, [Component])
  return (
    <CSSTransition in={true} timeout={400} classNames="list-transition" unmountOnExit appear>
      <div className="list-body">
        <PrevPage
          type={"next"}
          component={Component}
          pageEvent={() => {
            pageEvent("about")
          }}
        />
        {Component}
      </div>
    </CSSTransition>
  )
}
