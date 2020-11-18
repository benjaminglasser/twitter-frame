import React, { Component } from 'react'

export class Calendar extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date =  (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                {this.state.date}
            </div>
        );
    }
}

  export default Calendar;