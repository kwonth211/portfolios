import React, { useState, useEffect, ReactNode } from "react"
import { Header } from "./header"
import "antd/dist/antd.css"
import { ContentAbout, ContentHome } from "./container"
import { NextPage } from "./footer"
import { PageAnimation } from "./common/Animation"

function App() {
  let [component, setComponent] = useState<ReactNode>()

  let [page, setPage] = useState(0)

  const [mountFlag, setMountFlag] = useState(false)
  const PageArray = [<ContentHome />, <ContentAbout />, <ContentAbout />]

  // useEffect(() => {
  //   setComponent(<ContentAbout />)
  // }, [])

  useEffect(() => {
    setMountFlag(true)
  }, [])

  useEffect(() => {
    console.log(page)
    if (mountFlag && PageArray[page]) {
      setComponent(PageArray[page])
    }
  }, [page])

  const pageEvent = (key: any) => {
    if (key === "next") {
      if (page < PageArray.length - 1) setPage(page + 1)
    } else {
      if (0 < page) setPage(page - 1)
    }
  }
  return (
    <div style={{ background: "rgb(249,249,249)" }}>
      <Header component={component} />

      {!component ? <ContentHome /> : <PageAnimation component={component} pageEvent={pageEvent} />}
      <NextPage
        type={"next"}
        component={component}
        pageEvent={() => {
          pageEvent("next")
        }}
      />
    </div>
  )
}

export default App
