import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: "12:00PM"
    }

    this.makeTime = this.makeTime.bind(this)

    this.interval = null
  }

  makeTime() {
    const now = new Date()
    let time
    let hour = now.getHours()
    let minute = now.getMinutes()
    let isPM = hour - 12 >= 0;
    hour = isPM ? hour%12 : (hour || 12)
    time = hour + ':' + (minute<10 ? "0" + minute : minute) + (isPM ? 'PM' : 'AM')
    this.setState({currentTime: time})
  }

  componentDidMount() {
    this.makeTime()
    this.interval = setInterval(this.makeTime, 1000)
  }

   componentWillUnmount() {
    clearInterval(this.interval)
   }

  render() {
    return (
      <div>
        <p>
          { this.state.currentTime }
        </p>
      </div>
    );
  }
}

export default Clock;