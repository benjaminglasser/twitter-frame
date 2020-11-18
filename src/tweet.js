import {
    useState,
    useEffect,
   } from 'react'
  import axios from 'axios';
import "./Button.css";
  
  
  const initialTweets = [
  ]
  
  function Tweet() {
    const [tweets, setTweets] = useState(initialTweets)
    const [current, setCurrent] = useState(0)
    const [loading, setLoading] = useState(false)
    
    // useEffect(() => {
    //   rehydrateTweets()
    // },[])
  
    function rehydrateTweets() {
      setLoading(true)
      axios.get('http://localhost:8000/latest')
        .then((response) => {
          setTweets(response.data);
          setLoading(false)
        })
    }
    return (
      <div>
       { loading
          ? <div className="loader">Loading tweets...</div>
          : null }
        {
          tweets[current] ? <div>
          {tweets[current].text}
        </div> : <div>no tweet to show</div>
  
        }
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