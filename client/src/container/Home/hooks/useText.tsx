import React, { FC, useState, useEffect, useRef } from "react"
import { Cursor } from "../../../common/StyledComponents"

let count = 9

// const UseText: FC<{}> = () => {
const UseText = () => {
  let [text, setText] = useState<any>([])
  const interval = useRef<any>()
  let helloText = "안녕하세요.".split("").reverse()
  let introduceText = "저는 <FrontEnd/> 개발자 권태훈 입니다.".split("").reverse()
  let replaceText = "웹/모바일 , 성장하고 싶은 ,  소통을 잘하는".split("")
  useEffect(() => {
    setTimeout(() => {
      interval.current = setInterval(() => {
        if (helloText.length > 0) {
          text = text.concat(helloText.pop() || "")
          text = removeCursor(text)
          text = text.concat(getCusor())
        } else {
          if (introduceText.length === 0) {
            if (text.includes(">") || text.includes(",")) {
              setTimeout(() => {
                text = removeCursor(text)
                text.splice(10, 0, getCusor())
                text.splice(11, 1)
                count = 10
              }, 10)
            } else {
              if (replaceText.length > 0) {
                text = replaceTextFunc(text)
              } else {
                text = removeCursor(text)
                text = text.concat(getCusor())

                clearTimeout(interval.current)
              }
            }
          } else {
            if (helloText.length === 0 && introduceText.length === 27) {
              text = text.concat(<br key={"br"} />)
            }
            text = text.concat(introduceText.pop() || "")

            text = removeCursor(text)
            text = text.concat(getCusor())
          }
        }

        setText([...text])
      }, 100)
    }, 1000)

    return () => {
      clearInterval(interval.current)
      count = 9
    }
  }, [])

  const replaceTextFunc = (text: any) => {
    const popDataArray = replaceText.shift()
    text.splice(count++, 0, popDataArray)
    // text = text.concat(popDataArray)

    return text
  }

  const getCusor = () => {
    return <Cursor key={"cursor"}>|</Cursor>
  }

  const removeCursor = (text: any) => {
    text = text.filter((str: any) => {
      return !str.props || !str.props?.children
    })
    return text
  }

  return text
}

export default UseText
