import { keyframes } from "styled-components"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { PageComponent } from "../../footer"
import { AnimationBodyNext, AnimationBodyPrev } from "./AnimationStyled"
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
          <AnimationBodyNext>
            <PageComponent
              page={page}
              type={"prev"}
              pageEvent={() => {
                pageEvent("prev")
              }}
            />
            {Component[page - 1]}
          </AnimationBodyNext>
        </CSSTransition>
        <CSSTransition in={!flag} timeout={2000} classNames="list-transition" unmountOnExit appear>
          <AnimationBodyNext>
            <PageComponent
              page={page}
              type={"prev"}
              pageEvent={() => {
                pageEvent("prev")
              }}
            />
            {Component[page]}
            <PageComponent
              type={"next"}
              page={page}
              pageEvent={() => {
                pageEvent("next")
              }}
            />
          </AnimationBodyNext>
        </CSSTransition>
      </>
    )
  } else {
    return (
      <>
        <CSSTransition in={!flag} timeout={750} classNames="list-transition2" unmountOnExit appear>
          <AnimationBodyPrev page={page}>
            <PageComponent
              page={page}
              type={"prev"}
              pageEvent={() => {
                pageEvent("prev")
              }}
            />
            {Component[page]}
            <PageComponent
              type={"next"}
              page={page}
              pageEvent={() => {
                pageEvent("next")
              }}
            />
          </AnimationBodyPrev>
        </CSSTransition>
        <CSSTransition in={flag} timeout={750} classNames="list-transition2" unmountOnExit appear>
          <AnimationBodyPrev page={page}>
            <PageComponent
              page={page}
              type={"prev"}
              pageEvent={() => {
                pageEvent("prev")
              }}
            />

            {Component[page + 1]}
            <PageComponent
              type={"next"}
              page={page}
              pageEvent={() => {
                pageEvent("next")
              }}
            />
          </AnimationBodyPrev>
        </CSSTransition>
      </>
    )
  }
}
