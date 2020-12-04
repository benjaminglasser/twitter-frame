import React, { useState, useRef, useEffect } from 'react';
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


const TRANS_LENGTH = 500 // ms 

const initialTweets = [
]

export default (props) => {
  const [tweets, setTweets] = useState(initialTweets)
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const socketRef = useRef(null)

  useEffect(() => {
    rehydrateTweets()

    const socket = new WebSocket('ws://localhost:8000')
    socket.addEventListener('open', event => {
      console.log('Socket is open')
    })
    socket.addEventListener('error', event => {
      console.log('Socket error :(')
    })
    socket.addEventListener('close', event => {
      console.log('Socket is closed')
    })
    socket.addEventListener('message', event => {
      const msg = JSON.parse(event.data)
      console.log('Socket message:', msg)
      if (msg.type === "user:swipe" && !transitioning) {
        showNextTweet()
      }
      // event.data.arrayBuffer().then(msg => console.log(msg))
    })
    socketRef.current = socket
  }, [])

  function rehydrateTweets() {
    setLoading(true)
    axios.get('http://localhost:8000/latest')
      .then((response) => {
        setTweets(response.data);
        setLoading(false)
      })
  }

  function showNextTweet() {
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(c => c+1)
      setTransitioning(false)
    }, TRANS_LENGTH * 1.5)
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
          <Tweet
            tweet={tweet}
            loading={loading}
            transitioning={transitioning}
            transLength={TRANS_LENGTH} />
          {/* <LinkPreview tweet={tweet} /> */}
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