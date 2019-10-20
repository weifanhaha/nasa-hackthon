import React, { Component } from "react"
import styled, { keyframes } from "styled-components"

import iceImg from "../assets/images/ice.png"
import bearImg from "../assets/images/bear.png"
import OneOOneImg from "../assets/images/101.png"
import SeaLevelImg from "../assets/images/SeaLevel.GIF"

const BoardBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${props => (props.bgImg ? `url(${props.bgImg})` : "#ffffff")};
  background-size: cover;
  z-index: 1;
  transition: all 0.7s ease-in-out;
`

const fadeIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  margin-top: 50px;
  animation: ${fadeIn} 0.3s linear;
  ${props => (props.hover ? "cursor: pointer" : "")};
`

const Content = styled.div`
  width: 980px;
  margin: 0 auto;
`

const Shrink = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.6);
  }
`

const Ice = styled.div`
  background: ${`url(${iceImg})`};
  background-size: cover;
  position: fixed;
  bottom: -30px;
  width: 600px;
  height: 600px;
  left: 29%;
  transform: translate(-50%, 0);
  transform-origin: center bottom;
  animation: ${Shrink} 2s linear forwards;
`

const Bear = styled.div`
  background: ${`url(${bearImg})`};
  background-size: cover;
  position: fixed;
  width: 240px;
  height: 320px;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0);
`

const Grow = keyframes`
  from {
    transform: scaleY(2);
  }

  to {
    transform: scaleY(0);
  }
`

const OneOOne = styled.div`
  background: ${`url(${OneOOneImg})`};
  background-size: cover;
  position: fixed;
  width: 180px;
  height: 450px;
  bottom: 30px;
  left: 35%;
  transform: translate(-80%, 0);
  &::before {
    content: "";
    position: absolute;
    background-color: #ffffff;
    width: 180px;
    height: 200px;
    transform-origin: top;
    animation: ${Grow} 3s linear forwards;
  }
`

const OneOOneDesc = styled.div`
  position: fixed;
  width: 500px;
  height: 450px;
  bottom: 30px;
  left: 48%;
  font-size: 24px;
  line-height: 4.5;
  &::before {
    content: "";
    position: absolute;
    background-color: #ffffff;
    width: 500px;
    height: 200px;
    transform-origin: top;
    animation: ${Grow} 3s linear forwards;
  }
`

const SmallOneOOneContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`

const SmallOneOOne = styled.div`
  background: ${`url(${OneOOneImg})`};
  background-size: cover;
  width: 40px;
  height: 100px;
  margin-bottom: 2px;
`

const SeaLevel = styled.div`
  background: ${`url(${SeaLevelImg})`};
  background-size: cover;
  width: 900px;
  height: 500px;
  position: fixed;
  left: 50%;
  top: 160px;
  transform: translate(-50%, 0);
`

const Ref = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: gray;
  a {
    color: gray;
  }
`

class EndBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 0
    }
  }

  onChangeStep = step => {
    this.setState({ step: step })
  }

  get co2Mul() {
    const co2List = this.props.co2List
    const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length
    const co2Avg = average(co2List)
    console.log(co2Avg)
    return Math.round((co2Avg * 100) / 12) - 100
  }

  get co2101() {
    const co2List = this.props.co2List
    const sum = arr => arr.reduce((acc, val) => acc + val)
    const allCo2 = sum(co2List)
    console.log(allCo2)
    return Math.round(allCo2 / 105)
  }

  renderSwitch() {
    if (this.state.step === 0) {
      return (
        <BoardBackground>
          <Content
            onClick={() => {
              this.onChangeStep(1)
            }}
          >
            <Title>分析</Title>
          </Content>
        </BoardBackground>
      )
    } else if (this.state.step === 1) {
      return (
        <BoardBackground>
          <Content
            onClick={() => {
              this.onChangeStep(2)
            }}
          >
            <Title>
              你的行為多排放了 {this.co2Mul} % 的二氧化碳 <br />
              相當於一年多排放約 {this.co2101} 棟 101 的量{" "}
            </Title>
            <OneOOne />
            <OneOOneDesc>
              美式餐廳進口美國牛 - 35 噸
              <br />
              星巴克進口巴西咖啡豆 - 35 噸
              <br />
              開車上學 - 17 噸
              <br />
              每人每年基本排放 - 12 噸
            </OneOOneDesc>
          </Content>
        </BoardBackground>
      )
    } else if (this.state.step === 2) {
      return (
        <BoardBackground>
          <Content
            onClick={() => {
              this.onChangeStep(3)
            }}
          >
            <Title>
              過去的數十年中
              <br />
              你一共排放了約 80 棟 101 的二氧化碳
            </Title>
            <SmallOneOOneContainer>
              {[...Array(80)].map(idx => {
                return <SmallOneOOne key={idx} />
              })}
            </SmallOneOOneContainer>
          </Content>
        </BoardBackground>
      )
    } else if (this.state.step === 3) {
      return (
        <BoardBackground>
          <Content
            onClick={() => {
              this.onChangeStep(4)
            }}
          >
            <Title>你的行為使地球升溫加速了 {this.co2Mul} %</Title>
            <Ice />
            <Bear />
          </Content>
        </BoardBackground>
      )
    } else if (this.state.step === 4) {
      return (
        <BoardBackground>
          <Content
            onClick={() => {
              this.onChangeStep(5)
            }}
          >
            <Title>使海平面上升了 1.6 公尺</Title>
            <SeaLevel />
          </Content>
        </BoardBackground>
      )
    } else {
      return (
        <BoardBackground>
          <Title>The End</Title>
          <Title hover onClick={() => this.props.onChangeStep(1)}>
            重來一次
          </Title>
          <Ref>
            Some pictures{" "}
            <a href="http://www.freepik.com">
              Designed by tirachardz / Freepik
            </a>
            <br />
            星巴克圖片由saraj在Pixabay上發布
            <br />
            校門圖片由David Mark在Pixabay上發布
            <br />
            貓圖片由imarksm在Pixabay上發布
          </Ref>
        </BoardBackground>
      )
    }
  }

  render() {
    return this.renderSwitch()
  }
}

export default EndBoard
