import React, { useRef, useState } from 'react'
import "./Video.css"

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null)

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className='video'>
        <video
          onClick={handleVideoPress}
          className='video__player'
          loop 
          ref={videoRef}
          src='https://v16-webapp.tiktok.com/c761892e36c6c341aeef18201764e1bf/63897cbb/video/tos/alisg/tos-alisg-pve-0037/cff0832ea4e341f2b3117ae461f1e80d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3204&bt=1602&cs=0&ds=3&ft=4b~OyM3x8Zmo01cvx64jVVS4ZpWrKsdm&mime_type=video_mp4&qs=0&rc=Zzo6ZjRpZDo2PGU5NDg1Z0Bpam5xPDw6ZjY5ZjMzODgzNEAyMS9hL19fXy8xLTUtLi9iYSNhMmptcjRna29gLS1kLy1zcw%3D%3D&l=202212012218320102140290261B09AAB8&btag=80000'
        ></video>

        {/* Video footer */}
        {/* Video sidebar */}
    </div>
  )
}

export default Video