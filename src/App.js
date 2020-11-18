import React, { Component } from 'react';
import Tweet from './tweet.js';
import './tweet.css';
import Upper from "./upper-section";
import "./upper-section.css";
import "./calendar.css";
import "./clock.css";
import "./App.css";
import "./divider.css";
import "./gradient.css";




class App extends Component {
  render() {
  return (
    <div className="Gradient">
      <div>
        <div><Upper /></div>
        <div className="Divider" />
        <div className="Tweet"><Tweet /></div>
      </div>
    </div>
    
 
  );
  }
}



export default App;
