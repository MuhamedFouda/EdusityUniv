import React, { useRef } from 'react'
import './vedioplayer.scss'

export default function Vedioplayer({playstate , setplaystate}) {
    const player =useRef(null)

    const closePlayer=(e)=>{
        if(e.target===player.current){
            setplaystate(false);
        }
    }
  return (
    <div className ={ `vedioplayer ${playstate?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={require('../../assets/college-video-6XtGR-D3.mp4')} autoPlay muted controls> </video>
    </div>
  )
}
