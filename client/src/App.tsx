import React, { useState, useEffect, ReactNode, useMemo } from "react"
import { Header } from "./header"
import "antd/dist/antd.css"
import { ContentAbout, ContentHome, ContentSkill } from "./container"
import { PageAnimation } from "./common/Animation"

function App() {
  let [component, setComponent] = useState<ReactNode>()

  let [page, setPage] = useState(0)

  const [mountFlag, setMountFlag] = useState(false)
  const [animationMoveType, setAnimationMoveType] = useState("")
  useEffect(() => {
    setMountFlag(true)
  }, [])

  useEffect(() => {
    if (mountFlag) {
      setComponent("sadasdsa")
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
  }
  const PageArray = useMemo(() => [<ContentHome pageEvent={pageEvent} />, <ContentAbout />, <ContentSkill />], [page])

  return (
    <div style={{ background: "rgb(249,249,249)" }}>
      <Header page={page} />

      {!component ? PageArray[0] : <PageAnimation animationMoveType={animationMoveType} page={page} component={PageArray} pageEvent={pageEvent} />}
    </div>
  )
}

export default App
