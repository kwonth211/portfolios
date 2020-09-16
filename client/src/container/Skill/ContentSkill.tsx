import { Card, Col, Row } from "antd"
import React, { FC } from "react"
import { Layout, Tag, Steps, Divider, Popover } from "antd"

const { Content } = Layout
const { Step } = Steps

const skills = [
  { title: "Hard Skills", subList: [] },
  { title: "Soft Skills", subList: [] },
  { title: "Progressing", subList: [] },
]
const ContentSkill: FC = () => {
  return (
    // // <div className="site-card-wrapper">

    // // </div>
    <div>
      <Content style={{ paddingTop: "140px", padding: "0 50px", width: "80%", margin: "0 auto", boxShadow: "5px 5px 10px 0px rgb(128,128,128)" }}>
        <h1 style={{ textAlign: "center", textDecoration: "underline", paddingTop: "10px" }}>Skills</h1>
        <div style={{ display: "inline", float: "right" }}>{/* <canvas ref={canvasRef} /> */}</div>
        <div className="site-layout-content">
          <Content style={{ height: "80%", paddingTop: "140px", padding: "0 50px", width: "80%", margin: "0 auto" }}>
            <Row gutter={40}>
              {skills.map((e) => (
                <Col span={8}>
                  <Card style={{ height: "500px" }} title={e.title} extra={<a href="#">more</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Content>
        </div>
      </Content>
    </div>
  )
}

export default ContentSkill
