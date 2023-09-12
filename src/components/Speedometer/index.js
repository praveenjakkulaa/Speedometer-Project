import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  speedIncrese = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  speedDecrese = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="speed">
          Speed is <span> {speed} </span> mph
        </h2>
        <p> Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button
            type="button"
            className="accelerate"
            onClick={this.speedIncrese}
          >
            Accelerate
          </button>
          <button className="break" type="button" onClick={this.speedDecrese}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
