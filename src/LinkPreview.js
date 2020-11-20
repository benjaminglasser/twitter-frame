import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./LinkPreview.css";

export default (props) => {
    const { tweet } = props
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(tweet)
        if (tweet && tweet.entities.urls[0] && tweet.entities.urls[0].expanded_url) {
            console.log("fetching link...", tweet.entities.urls[0].expanded_url)
            axios({
                url: 'http://localhost:8000/preview',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    link: tweet.entities.urls[0].expanded_url,
                }
            }).then(response => {
                setPreview(response.data)
            })
        }
    }, [tweet])

    return (
        preview
            ? <div className="LinkPreview">
                <h2>{preview.title}</h2>
                <p>{preview.description}</p>
                <img src={preview.img} />
              </div>
            : null
    )
}