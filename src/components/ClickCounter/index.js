import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => {
      console.log(`Counter was increasing ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="CounterVal">{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.onIncrease}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
