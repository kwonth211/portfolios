import { keyframes } from "styled-components";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { PageComponent } from "../../footer";
import { AnimationBodyNext, AnimationBodyPrev } from "./AnimationStyled";
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
    `;

/// animation padding 지우기..
export const AnimationNext: FC<{
  component: ReactNode[];
  pageEvent: any;
  animationMoveType: string;
  page: number;
}> = ({ component: Component, pageEvent, animationMoveType, page }) => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setFlag(!flag);
  }, [page]);

  return (
    <>
      <CSSTransition
        in={!flag}
        timeout={800}
        classNames={"list-transition"}
        unmountOnExit
        appear
      >
        <AnimationBodyNext>
          {flag ? Component[page - 1] : Component[page]}
        </AnimationBodyNext>
      </CSSTransition>
      <CSSTransition
        in={flag}
        timeout={800}
        classNames={"list-transition"}
        unmountOnExit
        appear
      >
        <AnimationBodyNext>
          {flag ? Component[page] : Component[page - 1]}
        </AnimationBodyNext>
      </CSSTransition>
    </>
  );
};

export default AnimationNext;
