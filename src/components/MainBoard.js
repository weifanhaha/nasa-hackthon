import React, { Component } from "react"

import ScriptBoard from "./ScriptBoard"
import EndBoard from "./EndBoard"

class MainBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      // co2List: [17.3, 35, 35, 35],
      co2List: [],
      textList: []
    }
  }

  onReset = () => {
    this.setState({
      step: 1,
      co2List: [],
      textList: []
    })
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

  onSaveText = text => {
    let textList = this.state.textList
    textList.push(text)
    this.setState({ textList: textList })
    console.log(this.state.textList)
  }

  renderSwitch() {
    if (this.state.step === 1) {
      return (
        <ScriptBoard
          onChangeStep={this.onChangeStep}
          onChangeCo2List={this.onChangeCo2List}
          onSaveText={this.onSaveText}
        />
      )
    } else {
      return (
        <EndBoard
          onReset={this.onReset}
          co2List={this.state.co2List}
          textList={this.state.textList}
        />
      )
    }
  }

  render() {
    return this.renderSwitch()
  }
}

export default MainBoard
