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
    debugger
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentSong !== this.props.currentSong){
      this.setState(this.props.currentSong)
    }
    debugger
  }

  currentRangeTime() {
    const currentTrackTime = document.getElementById('current-track-time');
    const timeRange = document.getElementById('time-range');
    timeRange.addEventListener('input', () => {
      return currentTrackTime.innerText = this.formatTime(timeRange.value)
    })
  }

  maxRangeTime() {
    const timeRange = document.getElementById('time-range');
    const audioEl = document.getElementsByClassName("audio-element")[0];
    return timeRange.max = Math.floor(audioEl.duration)
  }

  audioDuration() {
    debugger
    const durationEl = document.getElementsByClassName("audio-element")[0];
    const forceRender = () => { this.forceUpdate() } 

    if (!durationEl) return "0:00";
    durationEl.addEventListener('loadedmetadata', forceRender)
    
    if (durationEl.readyState > 0) {
      durationEl.removeEventListener('loadedmetadata', forceRender)
      return this.formatTime(durationEl.duration)
    } else {
      return "0:00"
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
    return `${mins}:${formatSecs}`;
  }

  

  playAudio() {
    const audioEl = document.getElementsByClassName
    ("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon')
    debugger
  
    if (audioEl.paused) {
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
    const audioEl = document.getElementsByClassName("audio-element")[0];
    const duration = this.audioDuration()
    const timeRange = document.getElementById('time-range');
    
    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    }

    if (audioEl && audioEl.readyState > 0) {
      console.log('loaded')
      this.maxRangeTime();
      this.currentRangeTime();
      timeRange.addEventListener('change', () => {
        timeRange.value = Math.floor(audioEl.currentTime)
      })
      debugger
    }

    

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
            <div id="current-track-time" ></div>
            <input type="range" id="time-range" max="100" value="0"/>
            <div id="duration" >{duration}</div>
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


