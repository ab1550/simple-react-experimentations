import React, { Component } from 'react'

export default class Counter extends Component {
    
    constructor(){
      super()
      this.state = {
        counter: 0
      }

      this.updateCounter = this.updateCounter.bind(this)
    }

    updateCounter(){
        this.setState(prevState => ({
          counter: prevState.counter + 1
        }))
    }

    updateCounterMultipleTimes(){
      for (let i = 0; i < 12000; i++) {
        this.updateCounter()
        
      }
    }

    render() {
    
    
    return (
      <div>
        <p>{this.state.counter}</p>
        <p>click this button to update the counter above</p>
        <button onClick={this.updateCounter}>add 1</button>
      </div>
    )
  }
}
