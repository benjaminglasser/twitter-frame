import {
  useState,
  useEffect,
 } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const initialTweets = [
]

function App() {
  const [tweets, setTweets] = useState(initialTweets)
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(false)
  
  // useEffect(() => {
  //   rehydrateTweets()
  // },[])

  function rehydrateTweets() {
    axios.get('http://localhost:8000/latest')
      .then((response) => {
        setTweets(response.data);
        setLoading(false)
      })
  }
  return (
    <div className="App">
     { loading
        ? <div className="loader">Loading tweets...</div>
        : tweets.map((tweet, index) => {
            return(
              <div key={index}>
                {tweet.text}
              </div>
            )
          })
     }
     <button onClick={e => {
       setCurrent(current+1)
     }}>next</button>
     <button onClick={e => {
       setLoading(true)
       rehydrateTweets()
     }}>Refresh Tweets</button>
    </div>
  );
}

export default App;
