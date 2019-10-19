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
  bottom: -20px;
  width: 300px;
  height: 300px;
  left: 40%;
  transform: translate(-50%, 0);
  transform-origin: center bottom;
  animation: ${Shrink} 2s linear forwards;
`

const Bear = styled.div`
  background: ${`url(${bearImg})`};
  background-size: cover;
  position: fixed;
  width: 120px;
  height: 160px;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0);
`

const OneOOne = styled.div`
  background: ${`url(${OneOOneImg})`};
  background-size: cover;
  position: fixed;
  width: 120px;
  height: 300px;
  bottom: 80px;
  left: 50%;
  transform: translate(-80%, 0);
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
  width: 700px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translate(-50%, 0);
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
    // co2Avg = Math.round10(co2Avg, -1)
    console.log(co2Avg)
    return Math.round((co2Avg * 100) / 12) - 100
    // return average(co2List)
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
        </BoardBackground>
      )
    }
  }

  render() {
    return this.renderSwitch()
  }
}

export default EndBoard
