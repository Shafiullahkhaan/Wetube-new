import React from "react";
import data from "./data.json"



export default function Card(item){

    return (
        <div className="video-card">

            <div>
                <a href={item.videoId}>
                    <img src={item.videoThumbnail} className="thumbnail" /> 
                </a>
               
            </div>

            <div className="video-info">
                <img  src={item.channelThumbnail} className="channel-image" />
                <h4 className="video-name">{item.videoName}</h4>
            </div>

            <div className="small-text">
                <p>{item.channelName}</p>
                <p className="viewcount">{item.views}Views</p>
            </div>

        </div>
    )
}