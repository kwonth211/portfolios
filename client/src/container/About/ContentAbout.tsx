import React, {
  FC,
  useEffect,
  useState,
  FunctionComponent,
  createRef,
  useRef,
} from "react";
import { Layout, Tag, Steps, Divider, Popover } from "antd";
import { PageComponent } from "./../../footer";
import { ContentDiv, CenterDiv } from "../../common/StyledComponents";

const { Content } = Layout;
const { Step } = Steps;

const histroyData = [
  {
    title: "명지전문대학",
    description: "2013/02 ~ 2018/02",
  },
  {
    title: "응용 SW개발자 양성과정",
    description: "2018/08 ~ 2019/03",
  },
  {
    title: "더존비즈온",
    description: "2019/08 ~ 2020/09",
  },
  {
    title: "패스트캠퍼스",
    description: "2020/10 ~ ",
  },
];

let x = 120;
let y = 100;
let z = 15;
let p = 10;
let count = 0;
const humanDrawing = (ctx: any) => {
  console.log(y);
  if (y > 15) {
    ctx.clearRect(0, 0, 400, 400);
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, 2 * Math.PI);
    ctx.moveTo(x - 5, y + 5);
    ctx.lineTo(x - 5, y + 25); //몸

    let count = 0;
    setInterval(() => {
      if (count < 50) {
        ctx.moveTo(x - 6, y + 25);
        ctx.lineTo(x + 7, y + 45); //오른쪽다리
      } else {
        // ctx.moveTo(x - 6, y + 25)
        // ctx.lineTo(x + 7, y + 35) //오른쪽다리

        ctx.moveTo(x - 6, y + 35);
        ctx.lineTo(x + 7, y + 45); //오른쪽다리

        if (count > 100) count = 0;
      }

      ctx.stroke();
      count++;
    }, 10);

    ctx.moveTo(x - 6, y + 25);
    ctx.lineTo(x - 15, y + 45); //왼쪽다리
    ctx.stroke();

    x += 1.5;
    y -= 0.8;
  }
};

let x_2 = 135;
let y_2 = 135;

const stairsDrawing = (ctx: any) => {
  let x = 135;
  let y = 135;
  for (let i = 0; i < 10; i++) {
    ctx.rect(x, y, 20, 350);
    x += 20;
    y -= 10;
  }

  // ctx.fillStyle = "1px solid black"
  ctx.border = "1px solid red";
  ctx.fill();
  ctx.closePath();
  x -= 0.5;
  y -= 0.8;
  // x_2 += 0.05
  // y_2 += 0.08
};

const tagData = [
  "front-end",
  "back-end",
  "javascript",
  "typescript",
  "reacthooks",
  "next",
  "node",
  "graphql",
];
const ContentAbout: FC<{ pageEvent?: any }> = ({ pageEvent }) => {
  let [current, setCurrent] = useState(0);
  let canvasRef = useRef<HTMLCanvasElement>(null);
  const interval = useRef<any>();
  // let [ctx, setCtx] = useState<any>(null)

  useEffect(() => {
    let canvas = canvasRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    if (ctx) {
      // interval.current = setInterval(() => {
      //   humanDrawing(ctx)
      //   stairsDrawing(ctx)
      // }, 20)
    }

    return () => {
      clearInterval(interval.current);
      // let a = document.getElementsByClassName("list-body")
      // debugger
    };
  }, []);

  useEffect(() => {
    if (current < 3) {
      setTimeout(() => {
        setCurrent(current + 1);
      }, 500);
    }
  }, [current]);

  return (
    <div>
      <PageComponent type={"prev"} page={1} pageEvent={pageEvent} />

      <Content
        style={{
          height: "40vh",
          padding: "0 50px",
          width: "70%",
          margin: "0 auto",
          boxShadow: "5px 5px 10px 0px rgb(128,128,128)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            paddingTop: "10px",
          }}
        >
          About
        </h1>
        <div style={{ display: "inline", float: "right" }}>
          <canvas ref={canvasRef} />
        </div>
        <div className="site-layout-content">
          하루하루 성장하고 싶은 개발자 입니다. 기본적인 html,css,javascript 를
          다를줄 알며 최신 프레임워크 react를 다루는데에도 익숙합니다.
          <br /> 향후에는 웹 전반적인 fullstack 역량을 길러 개발 전문가가
          되는것이 제 꿈입니다.
          <br />
          <br />
          {tagData.map((e, i) => (
            <Tag key={i} color="default">
              {"#" + e}
            </Tag>
          ))}
        </div>
      </Content>

      <Content
        style={{
          padding: "30px 50px",
          width: "70%",
          marginTop: "20px",
          height: "30%",
        }}
      >
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          History
        </h1>
        <Steps current={current}>
          {histroyData.map((e, i) => (
            <Step key={i} title={e.title} description={e.description} />
          ))}
        </Steps>
        <Divider />
      </Content>
      <PageComponent type={"next"} page={1} pageEvent={pageEvent} />
    </div>
  );
};

export default ContentAbout;
