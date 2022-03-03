import React from 'react'

class MediaPlayer extends React.Component {

  playAudio() {
    debugger
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    debugger
    let zombie_src = "https://earshot-dev.s3.amazonaws.com/dhHhDoNhPjshEssvZmFiGei1";
    return(
      <div>
        <button onClick={this.playAudio}>
            <span>Play Audio</span>
        </button>
        <audio className={"audio-element"}>
          <source src='https://earshot-dev.s3.amazonaws.com/dhHhDoNhPjshEssvZmFiGei1'/>
        </audio>
      </div>
    )
  }
}

export default MediaPlayer;