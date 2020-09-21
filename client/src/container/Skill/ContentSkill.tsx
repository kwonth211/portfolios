import { Card, Col, Row } from "antd"
import React, { FC } from "react"
import { Layout, Tag, Steps, Divider, Popover, Image } from "antd"

const { Content } = Layout
const { Step } = Steps

const skills = [
  {
    title: "Hard Skills",
    subList: [
      { img: require("./../../media/html.png"), name: "HTML / CSS" },
      { img: "", name: "JavaScript (ES6+)" },
      { img: "", name: "Typescript" },
      { img: "", name: "React" },
    ],
  },
  {
    title: "Soft Skills",
    subList: [
      { img: "", name: "RestAPI" },
      { img: "", name: "GraphQL" },
      { img: "", name: "ContentAPI" },
      { img: "", name: "Recoil" },
    ],
  },
  {
    title: "Progressing",
    subList: [
      { img: "", name: "Node" },
      { img: "", name: "java" },
      { img: "", name: "python" },
    ],
  },
]
const ContentSkill: FC = () => {
  return (
    // // <div className="site-card-wrapper">

    // // </div>
    <div>
      <Content style={{ width: "80%", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", textDecoration: "underline", paddingTop: "10px" }}>Skills</h1>
        <div style={{ display: "inline", float: "right" }}>{/* <canvas ref={canvasRef} /> */}</div>
        <div className="site-layout-content">
          <Content style={{ height: "50%", width: "70%", margin: "0 auto" }}>
            <Row gutter={40}>
              {skills.map((e) => (
                <Col span={8}>
                  <Card style={{ height: "400px" }} title={e.title} extra={<a href="#">more</a>}>
                    {/* <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p> */}
                    {e.subList.map((tech) => (
                      <div>
                        {" "}
                        <Image width={30} src={tech.img} /> {tech.name}
                      </div>
                    ))}
                  </Card>
                </Col>
              ))}
            </Row>
          </Content>
        </div>
        <Card style={{ width: "70%", margin: "0 auto" }}>
          <p>ETC.</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Content>
    </div>
  )
}

export default ContentSkill
