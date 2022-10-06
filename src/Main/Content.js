import React from 'react'
import "./Content.css"
import Sidebar from './Sidebar'
import Card from "./Card.js"
import data from "./data.json"


export const Content = () => {
    const cards = data.map(item =>{
        return (
            <Card
            key={item.id}
            channelName={item.channelName}
            videoName={item.videoName}
            videoId={item.videoId}
            views={item.views}
            channelThumbnail={item.channelThumbnail}
            videoThumbnail={item.videoThumbnail}
            />
        )
    })
  return (
    <div>
        <div className='box'>
            <Sidebar />
        <div className='hero'>
                 {cards}
        </div>
              
        </div>
     </div>
  )
}
