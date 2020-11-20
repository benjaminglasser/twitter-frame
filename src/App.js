import React, { useState, useEffect } from 'react';
import Tweet from './tweet.js';
import Upper from "./upper-section";
import "./upper-section.css";
import "./calendar.css";
import "./clock.css";
import "./App.css";
import "./divider.css";
import "./gradient.css";
import LinkPreview from "./LinkPreview";
import axios from 'axios';


const initialTweets = [
]

export default (props) => {
  const [tweets, setTweets] = useState(initialTweets)
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(false)

  function rehydrateTweets() {
    setLoading(true)
    axios.get('http://localhost:8000/latest')
      .then((response) => {
        setTweets(response.data);
        setLoading(false)
      })
  }

  const tweet = tweets[current]

  return (
    <div className="Gradient">
      <main>
        <header>
          <Upper />
          <div className="Divider" />
        </header>
        <div className="Lower">
          <Tweet tweet={tweet} loading={loading} />
          <LinkPreview tweet={tweet} />
        </div>
        <div className="buttons-cnr">
          <button
            className="Button"
            onClick={e => {
              setCurrent(current+1)
              // if we're at the end i.e current === tweets.length - 1...
              // rehydrateTweets().then(() => setCurrent(0))
            }}>next</button>
          <button
            className="Button"
            onClick={e => {
              rehydrateTweets()
            }}>Refresh</button>
        </div>
        </main>
    </div> 
  )
}