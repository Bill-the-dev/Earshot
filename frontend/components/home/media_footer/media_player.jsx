import React from 'react'

class MediaPlayer extends React.Component {

  playAudio() {
    // debugger
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    // debugger
    let zombie_src = "https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/04+Meet+Me+In+the+City.m4a";
    return(
      <div>
        <button onClick={this.playAudio}>
            <span>Play Audio</span>
        </button>
        <audio className={"audio-element"}>
          <source src={zombie_src}/>
        </audio>
      </div>
    )
  }
}

export default MediaPlayer;