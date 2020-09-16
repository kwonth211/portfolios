import { keyframes } from "styled-components"
import React, { FC, ReactNode, useEffect, useState } from "react"
import "./style.css"
import { CSSTransition } from "react-transition-group"
import { PageComponent } from "./../footer"
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
export const PageAnimation: FC<{ component: ReactNode[]; pageEvent: any; animationMoveType: string; page: number }> = ({ component: Component, pageEvent, animationMoveType, page }) => {
  const [flag, setFlag] = useState(true)
  useEffect(() => {
    if (animationMoveType === "next") {
      setTimeout(() => {
        setFlag(true)
        setFlag(false)
      })
    }
    setFlag(false)
  }, [Component, page, animationMoveType])

  if (animationMoveType === "next") {
    return (
      <>
        <CSSTransition in={flag} timeout={2000} classNames="list-transition" unmountOnExit appear>
          <div className="list-body">{Component[page - 1]}</div>
        </CSSTransition>
        <CSSTransition in={!flag} timeout={2000} classNames="list-transition" unmountOnExit appear>
          <div className="list-body">
            <PageComponent
              page={page}
              type={"prev"}
              pageEvent={() => {
                pageEvent("prev")
              }}
            />
            {Component[page]}
            <PageComponent type={"next"} page={1} pageEvent={pageEvent} />
          </div>
        </CSSTransition>
      </>
    )
  } else {
    return (
      <>
        <CSSTransition in={!flag} timeout={1500} classNames="list-transition2" unmountOnExit appear>
          <div className="list-body2">{Component[page]}</div>
        </CSSTransition>
        <CSSTransition in={flag} timeout={1500} classNames="list-transition2" unmountOnExit appear>
          <div className="list-body2">
            <PageComponent
              page={page}
              type={"prev"}
              pageEvent={() => {
                pageEvent("prev")
              }}
            />

            {Component[page + 1]}
            <PageComponent type={"next"} page={1} pageEvent={pageEvent} />
          </div>
        </CSSTransition>
      </>
    )
  }
}
