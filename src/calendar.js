import React, { Component } from 'react';
import moment from "moment";

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
                {moment(this.state.date).format("MM/DD/YY")}
            </div>
        );
    }
}

  export default Calendar;