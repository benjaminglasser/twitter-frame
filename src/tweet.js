import React from 'react'
import "./Button.css";
import "./tweet.css";
import moment from "moment";

  
function Tweet(props) {
  const { loading, tweet, transLength, transitioning } = props
  return (
    <div className={`Tweet${ transitioning ? ' exit' : '' }`} style={{animationDuration: `${transLength}ms`}}>
      { loading
        ? <div className="loader">Loading tweets...</div>
        : null }
      { tweet
        ? <div className="tweet-content">
            <div className="tweet-upper">
              <div className="tweet-avatar"><img src={tweet.user.profile_image_url} id="avatar"/></div>
              <div>
                <div className="tweet-username">{tweet.user.screen_name}</div>
                <div className="tweet-time">{moment(tweet.created_at).format("h:mm A • MM/DD/YY")}</div>
              </div>
            </div>
            <div className="tweet-text">{tweet.text}</div>
          </div>
        : <div className="no-tweet">no tweet to show</div> }
    </div>
  );
}



  export default Tweet;