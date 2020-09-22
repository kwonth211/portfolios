import { Card, Col, Row } from "antd"
import React, { FC } from "react"
import { Layout, List, Avatar } from "antd"
import { GradientStyled } from "./styled"
const { Content } = Layout

const ContentSkill: FC = () => {
  const skills = [
    {
      title: "Front-end",
      subList: [
        { img: require("./../../media/html.png"), name: "HTML / CSS" },
        { img: require("./../../media/javascript.png"), name: "JavaScript (ES6+)" },
        { img: require("./../../media/typescript.jpeg"), name: "Typescript" },
        { img: require("./../../media/Jquery.gif"), name: "JQuery" },
        { img: require("./../../media/react.png"), name: "React" },
      ],
    },
    {
      title: "Network/Environment",
      subList: [
        { img: require("./../../media/html.png"), name: "RestFulAPI" },
        { img: require("./../../media/graphql.png"), name: "GraphQL" },
        { img: require("./../../media/mongodb.png"), name: "MongoDB" },
      ],
    },
    {
      title: "Back-end",
      subList: [
        { img: require("./../../media/nodejs.png"), name: "Node" },
        { img: require("./../../media/Java.png"), name: "Java" },
        { img: require("./../../media/python.png"), name: "Python" },
      ],
    },
  ]

  //   return <div>asdasdasdasdsasa</div>

  return (
    <GradientStyled>
      <Content style={{ width: "80%", margin: "0 auto" }}>
        <Content style={{ height: "100%", width: "70%", margin: "0 auto" }}>
          <Row gutter={40}>
            {skills.map((e, i) => (
              <Col key={i} span={8}>
                <Card style={{ height: "100%" }} title={e.title} extra={<a href="#">more</a>}>
                  <List
                    itemLayout="horizontal"
                    dataSource={e.subList}
                    renderItem={(tech) => (
                      <List.Item>
                        <List.Item.Meta avatar={<Avatar src={tech.img} />} title={tech.name} />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Content>

        <Card style={{ width: "70%", margin: "0 auto", marginTop: "1%" }}>
          <h2>etc.</h2>
          Parcel / BootStrap / Semantic-ui / Chrome Extension / Mocha / Typography / react-router / Passport / babel / lodash / ejs / ...
        </Card>
      </Content>
    </GradientStyled>
  )
}

export default ContentSkill
