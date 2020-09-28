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


export const wrap = styled.div`
width: 40%;
margin: 10px auto;
border: 1px solid #000000;
`

export const text = styled.div`
padding: 5px 10px;
background-color: yellow;
text-align: center;
`