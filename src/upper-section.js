import React, { Component } from 'react';
import Calendar from "./calendar";
import Clock from "./clock";

class Upper extends Component {
    render() {
        return (
            <div className="Upper">
                <div><Clock /></div>
                <div><Calendar /></div>
            </div>
        );

    }
}

export default Upper;