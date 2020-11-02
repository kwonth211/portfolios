import { Card, Col, Row } from "antd";
import React, { FC, useMemo } from "react";
import { Layout, List, Avatar } from "antd";
import { GradientStyled } from "./styled";
import { PageComponent } from "./../../footer";

const { Content } = Layout;

const ContentSkill: FC<{ pageEvent?: any }> = ({ pageEvent }) => {
  const skills = useMemo(
    () => [
      {
        title: "Front-end",
        subList: [
          { img: require("./../../media/html.png"), name: "HTML / CSS" },
          {
            img: require("./../../media/javascript.png"),
            name: "JavaScript (ES6+)",
          },
          { img: require("./../../media/typescript.jpeg"), name: "Typescript" },
          { img: require("./../../media/Jquery.gif"), name: "JQuery" },
          { img: require("./../../media/react.png"), name: "React.js" },
          { img: require("./../../media/react.png"), name: "Next.js" },
        ],
      },
      {
        title: "devops",
        subList: [
          {
            img: require("./../../media/nodejs.png"),
            name: "GooleCloudPlatform ",
          },
          { img: require("./../../media/Java.png"), name: "BigQuery" },
        ],
      },
      {
        title: "Back-end",
        subList: [
          { img: require("./../../media/nodejs.png"), name: "Node" },
          { img: require("./../../media/Java.png"), name: "Java" },
          { img: require("./../../media/python.png"), name: "Python" },
          { img: require("./../../media/html.png"), name: "RestfulAPI" },
          { img: require("./../../media/graphql.png"), name: "GraphQL" },
          { img: require("./../../media/mongodb.png"), name: "MongoDB" },
          { img: require("./../../media/mongodb.png"), name: "Mysql" },
        ],
      },
    ],
    []
  );

  const etc = useMemo(
    () => [
      "react-hook-form",
      "jest",
      "express & koa",
      "lodash",
      "ant-design",
      "material-ui",
      "zeplin",
      "slack",
    ],
    []
  );

  //   return <div>asdasdasdasdsasa</div>

  return (
    <>
      <PageComponent type={"prev"} page={2} pageEvent={pageEvent} />
      <GradientStyled>
        <Content style={{ width: "80%", margin: "0 auto" }}>
          <Content style={{ height: "100%", width: "70%", margin: "0 auto" }}>
            <Row gutter={40}>
              {skills.map((e, i) => (
                <Col key={i} span={8}>
                  <Card
                    style={{ height: "100%" }}
                    title={e.title}
                    extra={<a href="#">more</a>}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={e.subList}
                      renderItem={(tech) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={tech.img} />}
                            title={tech.name}
                          />
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
            {etc.map((e) => e).join(" / ")}
            {/* Parcel / BootStrap / Semantic-ui / Chrome Extension / Mocha /
            Typography / react-router / Passport / babel / lodash / ejs / ... */}
          </Card>
        </Content>
        <PageComponent type={"next"} page={2} pageEvent={pageEvent} />
      </GradientStyled>
    </>
  );
};

export default ContentSkill;
