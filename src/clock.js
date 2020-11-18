import React, { Component } from 'react';

   class Clock extends Component {
    constructor() {
        super();
            var today = new Date(),
            time = today.getHours() + ':' + today.getMinutes();

            this.state = {
            currentTime: time
    }
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