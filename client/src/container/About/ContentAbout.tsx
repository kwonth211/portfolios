import React, { FC } from "react"
import { Layout, Breadcrumb } from "antd"
import { ContentDiv } from "../../common/StyledComponents"
import { Footer } from "./../../footer"

const { Content } = Layout

const ContentAbout: FC = () => {
  return (
    <div className="list-body" style={{ zIndex: 0 }}>
      <ul className="list">
        <li className={"list-item"}>Writing JavaScript</li>
        <li className="list-item"> Running</li>
        <li className="list-item"> Technical Writing</li>
        <li className="list-item"> Writing Clean code</li>
      </ul>
    </div>
  )
}

export default ContentAbout
