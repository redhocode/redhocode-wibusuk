"use client"
import React from 'react'
import Youtube from "react-youtube"
type Props = {
    videoId: string
}

const VideoPlayer = (props: Props) => {
    const option = {
        width: "360",
        hight: "250"
    }
  return (
    <>
    <div className='flex justify-center'>
        <Youtube videoId={props.videoId} onReady={(e) => e.target.playVideo()}
        opts={option}
        />
    </div>
    </>
  )
}

export default VideoPlayer