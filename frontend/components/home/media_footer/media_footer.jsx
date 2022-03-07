import React from 'react'
// icons
import playIcon from '../../../../app/assets/images/media_bar/play-solid.svg';
import pauseIcon from '../../../../app/assets/images/media_bar/pause-solid.svg';
import mutedIcon from '../../../../app/assets/images/media_bar/volume-xmark-solid.svg';
import volHighIcon from '../../../../app/assets/images/media_bar/volume-high-solid.svg';


class MediaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: "",
      currentAlbum: "",
      duration: null,
      formattedDuration: null,
    }
    this.playAudio = this.playAudio.bind(this)
  }
  
  componentDidMount(){ // accepts (prevProps, prevState) 
    this.props.fetchSongs()
      // .then(this.setState(this.props.currentSong))
    
    // audioEl.onloadedmetadata = () => {
    //   this.setState({
    //       duration: this.formatTime(audioEl.duration)
    //   })
    // }
    debugger
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentSong !== this.props.currentSong){
      this.setState(this.props.currentSong)
        // .then(this.setState({
        //   currentSong: this.props.currentSong.title
        // }))
    }

    debugger
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
    return `${mins}:${formatSecs}`;
  }
  
  audioDur() {
    debugger
    const durationEl = document.getElementsByClassName("audio-element")[0];
    // return durationEl.onloadedmetadata = () => {

    if (!durationEl) return '0:00';

    return this.formatTime(durationEl.duration)
    // } 

    // if (audio.readyState > 0) {
    //   this.showDuration();
    // } else {
      //   audioEl.
      // }
  }

  

  playAudio() {
    const audioEl = document.getElementsByClassName
    ("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon')
    debugger
  
    if (audioEl.paused) {
      // this.audioDur()
      audioEl.play()
      playbackIcon.src = pauseIcon;
      // playState ?
    } else {
      audioEl.pause()
      playbackIcon.src = playIcon;
      // playState ?
    }
  }

  muteAudio() {
    const muteIcon = document.getElementById('volume-icon');
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (audioEl.muted) {
      audioEl.muted = false;
      muteIcon.src = volHighIcon;
      // muteState ?
    } else {
      audioEl.muted = true;
      muteIcon.src = mutedIcon;
      // muteState ?
    }
  }

  render(){
    debugger
    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    }
    // if (!this.audioDur) {
    //   this.audioDur = null;
    // }
    return (
      <div className="media-footer">
        {/* TRACK */}
        <div className="current-track">
          <div className="ct-art"></div>
          <div className="ct-track-info">
            <div className="ct-title">ct-Title</div>
            <div className="ct-artist">ct-Artist</div>
          </div>
          <div className="ct-like">{'<3'}</div>      
        </div>
        {/* MEDIA CONTROLS CTR */}
        <div className="media-player">
          <audio className="audio-element" src={this.state.songUrl} preload="metadata"></audio>
          <button onClick={this.playAudio} id="play-pause-btn">
            <img id="play-pause-icon" src={this.btnPlayPause} alt="play-pause" />  
          </button>
          {/* Track Time */}
          <div className="track-time">
            <div id="current-time" >0:00</div>
            <div id="duration" >{this.audioDur}</div>
            {/* <div id="duration" >{this.state.formattedDuration}</div> */}
          </div>
        </div>
        {/* MEDIA CONTROLS RIGHT */}
        <div className="media-controls">
          <button id="volume-button" onClick={this.muteAudio}>
            <img id="volume-icon" src={volHighIcon} alt="volume-mute" />  
          </button>
          <output id="volume-output">100</output>
          <input type="range" id="volume-slider" max="100" value="100"/>
          
        </div>
      </div>    
    )
  }
}



export default MediaFooter


// refs: 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState

// https://www.w3.org/2010/05/video/mediaevents.html


