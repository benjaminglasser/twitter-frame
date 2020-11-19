import {
    useState,
    useEffect,
  } from 'react'
import axios from 'axios';
import "./Button.css";
import "./tweet.css";
import moment from "moment";
  
  
  const initialTweets = [
  ]
  
  function Tweet() {
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
      <div className="Tweet">
       { loading
          ? <div className="loader">Loading tweets...</div>
          : null }
        { tweet
          ? <div className="tweet-content">
              <div className="tweet-avatar"><img src={tweet.user.profile_image_url} /></div>
              <div className="tweet-username">{tweet.user.screen_name}</div>
              <div className="tweet-time">{moment(tweet.created_at).format("h:mm A • MM/DD/YY")}</div>
              <div className="tweet-text">{tweet.text}</div>
            </div>
          : <div>no tweet to show</div> }
        <button className="Button" onClick={e => {
          setCurrent(current+1)
          // if we're at the end i.e current === tweets.length - 1...
          // rehydrateTweets().then(() => setCurrent(0))
        }}>next</button>
        <button className="Button" onClick={e => {
          rehydrateTweets()
          }}>Refresh</button>
      </div>
    );
  }

  export default Tweet;