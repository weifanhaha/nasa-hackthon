import React, { Component } from "react"
import styled, { keyframes } from "styled-components"

import ScriptBoard from "./ScriptBoard"
import EndBoard from "./EndBoard"

class MainBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      // co2List: [17.3, 35, 35, 35]
      co2List: []
    }
  }

  onChangeStep = step => {
    this.setState({ step: step })
  }

  onChangeCo2List = co2 => {
    let co2List = this.state.co2List
    co2List.push(co2)
    this.setState({ co2List: co2List })
    console.log(this.state.co2List)
  }

  renderSwitch() {
    if (this.state.step === 1) {
      return (
        <ScriptBoard
          onChangeStep={this.onChangeStep}
          onChangeCo2List={this.onChangeCo2List}
        />
      )
    } else {
      return (
        <EndBoard
          onChangeStep={this.onChangeStep}
          co2List={this.state.co2List}
        />
      )
    }
  }

  render() {
    return this.renderSwitch()
  }
}

export default MainBoard
