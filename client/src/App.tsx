import React, { useState, useEffect, ReactNode, useMemo } from "react"
import { Header } from "./header"
import "antd/dist/antd.css"
import { ContentAbout, ContentSkill, ContentHome } from "./container"
import { PageAnimation } from "./common/animation/Animation"
import useScroll from "./common/customHooks/Wheel"

let throttle: any
let throttleFlag = false

function App() {
  let [component, setComponent] = useState<ReactNode>()
  let [page, setPage] = useState(0)
  const [mountFlag, setMountFlag] = useState(false)
  const [animationMoveType, setAnimationMoveType] = useState("")
  const { type, e } = useScroll()

  useEffect(() => {
    if (!throttleFlag && e) {
      throttle = setTimeout(() => {
        if (type === "scrollDown") {
          pageEvent("next")
        } else if (type === "scrollUp") {
          pageEvent("prev")
        }
      }, 150)
      throttleFlag = true
    }
  }, [e])

  useEffect(() => {
    setMountFlag(true)
  }, [])

  useEffect(() => {
    if (mountFlag) {
      setComponent("pageMove")
    }
  }, [page])

  const pageEvent = (key: any) => {
    if (key === "next") {
      if (page <= PageArray.length - 1) {
        setPage(page + 1)
      }
    } else {
      if (0 < page) setPage(page - 1)
    }
    setAnimationMoveType(key)

    setTimeout(() => {
      throttleFlag = false
    }, 1500)
  }
  const PageArray = useMemo(() => [<ContentHome pageEvent={pageEvent} />, <ContentAbout />, <ContentSkill />], [page])

  return (
    <div style={{ background: "rgb(249,249,249)" }}>
      <Header page={page} />

      {!component ? PageArray[0] : <PageAnimation animationMoveType={animationMoveType} page={page} component={PageArray} pageEvent={pageEvent} />}
      {/* {<PageAnimation animationMoveType={animationMoveType} page={page} component={PageArray} pageEvent={pageEvent} />} */}
    </div>
  )
}

export default App
