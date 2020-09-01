import React, { useState, JSXElementConstructor } from "react"
import { Header } from "./header"
import "antd/dist/antd.css"
import { ContentAbout, ContentHome } from "./container"
import { Footer } from "./footer"
import { PageAnimation } from "./common/Animation"

function App() {
  let [component, setComponent] = useState(null)

  const pageEvent = (key: any) => {
    switch (key) {
      case "about":
        key = ContentAbout
        break
    }

    setComponent(key)
  }
  return (
    <div style={{ background: "rgb(249,249,249)" }}>
      <Header component={component} />
      {!component ? <ContentHome /> : <PageAnimation component={component} pageEvent={pageEvent} />}
      <Footer
        component={component}
        pageEvent={() => {
          pageEvent("about")
        }}
      />
    </div>
  )
}

export default App
