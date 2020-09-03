import React, { FC, useEffect, useState, FunctionComponent, createRef, useRef } from "react"
import { Layout, Tag, Steps, Divider, Popover } from "antd"
import { DownOutlined, SolutionOutlined } from "@ant-design/icons"

// import { ContentDiv } from "../../common/StyledComponents"
import { Footer } from "./../../footer"
import "./style.css"
import { CSSTransition } from "react-transition-group"
const { Content } = Layout
const { Step } = Steps

const histroyData = [
  {
    title: "명지전문대학",
    description: "명지전문대학",
  },
  {
    title: "인재 개발원",
    description: "2018/08 ~ 2019/03",
  },
  {
    title: "더존비즈온",
    description: "2019/08 ~ 2020/09",
  },
  {
    title: "???",
    description: "",
  },
]

const tagData = ["front-end", "back-end", "javascript", "typescript", "reacthooks", "next", "node", "graphql"]
const ContentAbout: FunctionComponent = () => {
  let [current, setCurrent] = useState(0)
  let canvasRef = useRef<HTMLCanvasElement>(null)
  const interval = useRef<any>()
  // let [ctx, setCtx] = useState<any>(null)

  useEffect(() => {
    let canvas = canvasRef.current as HTMLCanvasElement
    let ctx = canvas.getContext("2d")
    if (ctx) {
      interval.current = setInterval(() => {
        humanDrawing(ctx)
        stairsDrawing(ctx)
      }, 20)
    }

    return () => {}
  }, [])
  let x = 120
  let y = 80
  let z = 15
  let p = 10
  let count = 0
  const humanDrawing = (ctx: any) => {
    if (y > -10) {
      ctx.clearRect(0, 0, 400, 400)
      ctx.beginPath()
      ctx.arc(x, y, 7, 0, 2 * Math.PI)
      ctx.moveTo(x - 5, y + 5)
      ctx.lineTo(x - 5, y + 30) //몸

      ctx.moveTo(x - 6, y + 30)
      ctx.lineTo(x + 7, y + 65) //오른쪽다리

      // setInterval(() => {
      //   ctx.moveTo(x, y + 20)

      //   ctx.lineTo(x + z, y + p) //오른쪽다리

      //   z += 0.1
      //   p += 0.1
      //   ctx.stroke()
      // }, 10)

      ctx.moveTo(x - 6, y + 30)
      ctx.lineTo(x - 15, y + 65) //왼쪽다리
      ctx.stroke()

      x += 1.5
      y -= 0.8
    }
  }

  let x_2 = 135
  let y_2 = 135

  const stairsDrawing = (ctx: any) => {
    let x = 135
    let y = 135
    for (let i = 0; i < 10; i++) {
      ctx.rect(x, y, 20, 350)
      x += 20
      y -= 10
    }

    // ctx.fillStyle = "1px solid black"
    ctx.border = "1px solid red"
    ctx.fill()
    ctx.closePath()
    x -= 0.5
    y -= 0.8
    // x_2 += 0.05
    // y_2 += 0.08
  }

  useEffect(() => {
    if (current < 2) {
      setTimeout(() => {
        setCurrent(current + 1)
      }, 500)
    }
  }, [current])

  const customDot = (dot: any) => (
    <Popover
      content={
        <span>
          dsadas
          {/* step {index} status: {status} */}
        </span>
      }
    >
      {dot}
    </Popover>
  )
  return (
    <div>
      <Content style={{ paddingTop: "140px", padding: "0 50px", width: "80%", margin: "0 auto", boxShadow: "5px 5px 10px 0px rgb(128,128,128)" }}>
        <h1 style={{ textAlign: "center", textDecoration: "underline", paddingTop: "10px" }}>About</h1>
        <div style={{ display: "inline", float: "right" }}>
          <canvas ref={canvasRef} />
        </div>
        <div className="site-layout-content">
          하루하루 성장하고 싶은 개발자 입니다. 기본적인 html,css,javascript 를 다를줄 알며 최신 프레임워크 react를 다루는데에도 익숙합니다.
          <br /> 향후에는 웹 전반적인 fullstack 역량을 길러 개발 전문가가 되는것이 제 꿈입니다.
          <br />
          <br />
          {tagData.map((e, i) => (
            <Tag color="default">{"#" + e}</Tag>
          ))}
        </div>
      </Content>

      <Content style={{ padding: "30px 50px", marginTop: "20px" }}>
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>History</h1>
        <Steps current={current}>
          {histroyData.map((e, i) => (
            <Step key={e.title} title={e.title} description={e.description} />
          ))}
        </Steps>
        <Divider />
      </Content>
    </div>
  )
}

export default ContentAbout
