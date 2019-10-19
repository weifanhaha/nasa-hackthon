import React, { Component } from "react"
import styled, { keyframes } from "styled-components"

// import Script2 from "../assets/scripts2"
import Script from "../assets/scripts2"

import IconHeart from "../assets/images/heart.png"
import IconCoin from "../assets/images/coin.png"
import IconLeaf from "../assets/images/leaf.png"

const BoardBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${props => (props.bgImg ? `url(${props.bgImg})` : "#000000")};
  background-size: cover;
  z-index: 1;
  transition: all 0.7s ease-in-out;
`

const Mask = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
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
  color: white;
  margin-top: 120px;
  animation: ${fadeIn} 0.3s linear;
`

const TxtWrapper = styled.p`
  margin: 0;
`

const Content = styled.div`
  width: 980px;
  margin: 0 auto;
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 100px 100px;
`

const Option = styled.div`
  width: 300px;
  height: 150px;
  margin: 20px;
  padding: 30px 50px;
  text-align: center;
  color: white;
  font-size: 26px;
  border: 3px solid #ffffff;
  border-radius: 20px;
  overflow: auto;
  word-wrap: break-word;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #4c4a4a;
  }
`

const NavBar = styled.div`
  display: flex;
  position: fixed;
  top: 20px;
  right: 20px;
`

const NavItem = styled.div`
  width: 150px;
  padding: 20px;
  margin: 10px;
  color: white;
  font-size: 20px;
  font-weight: 500;
`

const Icon = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: ${props => `url(${props.bgImg})`};
  background-size: cover;
`

// const Script = {
//   0: {
//     text: "歡迎來到 Better Life 遊戲",
//     continue: 1
//   },
//   1: {
//     text: "你想玩什麼路線的遊戲呢",
//     options: [
//       { text: "挑戰高分", lead_to: -1 },
//       { text: "看劇情", lead_to: -2 }
//     ]
//   }
// }

class ScriptBoard extends Component {
  constructor(props) {
    super(props)

    this.script = Script

    this.state = {
      scriptIndex: 0,
      mood: 100,
      money: 100,
      env: 100,
      co2List: []
    }
  }

  get currentScript() {
    return this.script[this.state.scriptIndex]
  }

  handleOptionClick = option => {
    this.setState({ scriptIndex: option.lead_to })
    if (option.co2) {
      this.props.onChangeCo2List(option.co2)
      // let co2List = this.state.co2List
      // co2List.push(option.co2)
      // this.state({ co2List: co2List })
      // console.log(this.state.co2List)
    }
  }

  handleMaskClick = () => {
    if (this.currentScript.continue === 999) {
      this.props.onChangeStep(2)
    }
    if (this.currentScript.continue) {
      this.setState({ scriptIndex: this.currentScript.continue })
    }
    if (this.currentScript.effects) {
      const effects = this.currentScript.effects
      const mood = this.state.mood
      const money = this.state.money
      const env = this.state.env
      this.setState({
        mood: mood + effects.mood,
        money: money + effects.money,
        env: env + effects.env
      })
    }
  }

  reformat = text => {
    if (typeof text === "string") return <TxtWrapper>{text}</TxtWrapper>
    return text.map(txt => <TxtWrapper>{txt}</TxtWrapper>)
  }

  render() {
    return (
      <BoardBackground bgImg={this.currentScript.bgImg}>
        <Mask onClick={this.handleMaskClick} />
        <NavBar>
          <NavItem>
            <Icon bgImg={IconHeart}></Icon> {this.state.mood}
          </NavItem>
          <NavItem>
            <Icon bgImg={IconCoin} />
            {this.state.money}
          </NavItem>
          <NavItem>
            <Icon bgImg={IconLeaf} />
            {this.state.env}
          </NavItem>
        </NavBar>
        <Content>
          <Title>{this.reformat(this.currentScript.text)}</Title>
          <OptionsWrapper>
            {this.currentScript.options
              ? this.currentScript.options.map((option, index) => (
                  <Option
                    key={index}
                    onClick={() => {
                      this.handleOptionClick(option)
                    }}
                  >
                    {option.text}
                  </Option>
                ))
              : null}
          </OptionsWrapper>
        </Content>
      </BoardBackground>
    )
  }
}

export default ScriptBoard
