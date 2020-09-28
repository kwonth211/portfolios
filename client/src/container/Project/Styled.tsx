import styled from "styled-components"
import { Card, Avatar, Col, Row, Carousel } from "antd"

export const CardStyled = styled(Card)`
  height: 100%;
  width: 100%;
  color: #fff;
  align-self: flexStart;
  justify-content: center;
  align-items: center;
`
export const CarouselStyled = styled(Carousel)`
  display: flex;
  height: 50vh;
  align-items: center;
`
export const RowStyled = styled(Row)`
  display: flex;
  padding: 20px;
  justify-content: center;
  // justify-content: space-between;
`

export const CardImage = styled.img`
  opacity: 0.7;
`

export const Wrap = styled.div`
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  z-index: 2;
  text-align: center;
`
