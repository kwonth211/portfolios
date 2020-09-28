import React, { FC, useState, useEffect, useRef } from "react"

import { Card, Avatar, Col, Row, Carousel } from "antd"
import { CardStyled, CarouselStyled, RowStyled, CardImage, Wrap, Text } from "./Styled"
const { Meta } = Card

const ContentProject: FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline", paddingTop: "20px" }}>Project</h1>

      <CarouselStyled style={{ display: "flex" }} autoplay autoplaySpeed={4000}>
        <div>
          <RowStyled gutter={32}>
            <Col span={4}>
              <CardStyled
                hoverable
                bodyStyle={{ display: "none" }}
                cover={
                  <Wrap>
                    <CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    <Text>
                      <p> dasdadsadas</p>
                    </Text>
                  </Wrap>
                }
              ></CardStyled>
            </Col>
            <Col span={4}>
              <CardStyled hoverable bodyStyle={{ display: "none" }} cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}></CardStyled>
            </Col>
            <Col span={4}>
              <CardStyled hoverable bodyStyle={{ display: "none" }} cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}></CardStyled>
            </Col>
          </RowStyled>
        </div>
        {/* <div>
          <RowStyled gutter={32}>
            <Col span={4}>
              <CardStyled hoverable bodyStyle={{ display: "none" }} cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}></CardStyled>
            </Col>
            <Col span={4}>
              <CardStyled hoverable bodyStyle={{ display: "none" }} cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}></CardStyled>
            </Col>
            <Col span={4}>
              <CardStyled hoverable bodyStyle={{ display: "none" }} cover={<CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}></CardStyled>
            </Col>
          </RowStyled>
        </div> */}
      </CarouselStyled>
    </>
  )
}
export default ContentProject
