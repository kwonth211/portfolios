import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import _ from "lodash"

import { getScrollTop, getScrollBottom, getScrollPercentage } from "./ScrollHelper"

export default function useScroll(throttle = 100) {
  const scrollThrottle = React.useRef(throttle)
  const [scroll, setScroll] = React.useState({
    type: "",
    e: null,
  })

  useEffect(() => {
    scrollThrottle.current = throttle
  }, [throttle])

  useEffect(() => {
    const updateScroll = (e: any) => {
      let type
      if (e.wheelDeltaY > 0) type = "scrollUp"
      else type = "scrollDown"
      setScroll({
        type: type,
        e: e,
      })
    }
    const scrollListener = _.throttle(updateScroll, scrollThrottle.current)

    window.addEventListener("mousewheel", scrollListener)
    return () => {
      window.removeEventListener("mousewheel", scrollListener)
    }
  }, [])

  // const scrollListener = (e: any) => {
  //   console.log(e.wheelDeltaY)
  // }

  return scroll
}
