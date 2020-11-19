import React, { Component } from 'react';
import Calendar from "./calendar";
import Clock from "./clock";

class Upper extends Component {
    render() {
        return (
            <div className="Upper">
                <Clock />
                <Calendar />
            </div>
        );

    }
}

export default Upper;