import React from "react"
import { Header } from "./header"
import "antd/dist/antd.css"
import { ContentAbout, ContentHome } from "./container"
// import { Footer } from "./footer"

function App() {
  return (
    <div style={{ background: "rgb(249,249,249)" }}>
      <Header />
      <ContentHome />
      <ContentAbout />
      <ContentAbout />
      <ContentAbout />
    </div>
  )
}

export default App
