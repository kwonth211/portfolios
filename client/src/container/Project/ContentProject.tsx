import React, { FC, useState, useEffect, useRef } from "react";

import { Card, Avatar, Col, Row, Carousel } from "antd";
import {
  CardStyled,
  CarouselStyled,
  RowStyled,
  CardImage,
  Wrap,
  Text,
  WrapperCard,
} from "./Styled";
import { PageComponent } from "./../../footer";

const { Meta } = Card;

const ContentProject: FC<{ pageEvent?: any }> = ({ pageEvent }) => {
  return (
    <>
      <PageComponent type={"prev"} page={3} pageEvent={pageEvent} />

      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          paddingTop: "20px",
        }}
      >
        Project
      </h1>

      <WrapperCard>
        {[1, 2, 3, 4, 5, 6, 7].map((e, i) => (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        ))}
      </WrapperCard>
      <PageComponent type={"next"} page={3} pageEvent={pageEvent} />
    </>
  );
};
export default ContentProject;
