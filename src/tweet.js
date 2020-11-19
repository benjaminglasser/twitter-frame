import React from 'react'
import "./Button.css";
import "./tweet.css";
import moment from "moment";
  
function Tweet(props) {
  const { loading, tweet } = props
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
    </div>
  );
}

  export default Tweet;