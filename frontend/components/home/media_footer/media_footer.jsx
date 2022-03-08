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
    // this.audioEl = React.createRef()
    // this.timeRangeEl = React.createRef()
    // this.currentTrackTime = React.createRef()

    this.playAudio = this.playAudio.bind(this)
    this.formatTime = this.formatTime.bind(this)
    this.updateRange = this.updateRange.bind(this)
  }
  
  componentDidMount(){ // accepts (prevProps, prevState) 
    this.props.fetchSongs()
    // debugger
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentSong !== this.props.currentSong){
      this.setState(this.props.currentSong)
    }
    // debugger
  }

  maxRangeTime() {
    // invoked on audio load duration
    const timeRange = document.getElementById('time-range');
    const audioEl = document.getElementsByClassName("audio-element")[0];
    // debugger
    return timeRange.max = Math.floor(audioEl.duration)
  }
  
 
  updateRange(rangeInput) {
    const timeRange = document.getElementById('time-range');
    return (e) => {
      this.formatTime(timeRange.value)
    }
  }
  
  audioDuration() {
    // debugger
    const durationEl = document.getElementsByClassName("audio-element")[0];
    const forceRender = () => { this.forceUpdate() } 

    if (!durationEl) return "0:00";
    durationEl.addEventListener('loadedmetadata', forceRender)
    
    if (durationEl.readyState > 0) {
      durationEl.removeEventListener('loadedmetadata', forceRender)
      this.maxRangeTime();
      // debugger
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
    // debugger
  
    if (audioEl.paused) {
      audioEl.play()
      playbackIcon.src = pauseIcon;
      audioEl.addEventListener('timeupdate', e => {
        this.currentRangeTime()
      })
      // playState ?
    } else {
      audioEl.pause()     
      playbackIcon.src = playIcon;
      this.currentRangeTime()
      // playState ?
    }
  }

  currentRangeTime() {
    const currentTrackTime = document.getElementById('current-track-time');
    const timeRange = document.getElementById('time-range');
    const audioEl = document.getElementsByClassName("audio-element")[0];
   
    if (!currentTrackTime) return "0:00";

    if (audioEl.readyState > 0 && audioEl.paused) {
      currentTrackTime.innerHTML = this.formatTime(audioEl.currentTime)
      this.updateRange()
      // return this.formatTime(audioEl.currentTime)
    } else if (audioEl.readyState > 0 && !audioEl.paused) {
      currentTrackTime.innerHTML = this.formatTime(audioEl.currentTime)
      this.updateRange()
    } else {
      return "0:00"
    }
  }

  clickRange(e) {
    const currentTrackTime = document.getElementById('current-track-time');
    const timeRange = document.getElementById('time-range');
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (!audioEl) return null
    if (audioEl.readyState > 0){
      // audioEl.currentTime = audioEl.duration * 
    }

  }

  percentWidth(e) {
    e.target.offsetWidth
  }

  updateRange() {
    // debugger
    const currentTrackTime = document.getElementById('current-track-time');
    const timeRange = document.getElementById('time-range');
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (!audioEl) return null
    if (audioEl.readyState > 0){
      timeRange.value = Math.floor(audioEl.currentTime)
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
    // debugger
    const audioEl = document.getElementsByClassName("audio-element")[0];
    const timeRange = document.getElementById('time-range');
    const duration = this.audioDuration()
    
    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
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
          <button onClick={this.playAudio} id="play-pause-btn" ref={this.audioEl}>
            <img id="play-pause-icon" src={this.btnPlayPause} alt="play-pause" />  
          </button>
          {/* Track Time */}
          <div className="track-time">
            <div id="current-track-time">0:00</div> 
            <input type="range" id="time-range" max="100" value="0" onInput={this.updateRange()} onClick={e => this.clickRange(e)}/>
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

// Save constants to refactor?
// const cEle = {
//   audio: document.getElementsByClassName("audio-element")[0],
//   timeRange: document.getElementById('time-range'),
//   currentTrackTime: document.getElementById('current-track-time'),

// }


{/* audio tag */}
{/* <audio ref={songRef} type="audio/mpeg" preload="true"
  onTimeUpdate={ e => setCurrentTime(e.target.value) }
  onCanPlay={ e => setDuration(e.target.duration) }
  onEnded={ e => next_song(e, allSong.indexOf(currentSong) + 1, state) }
  src={ currentSong && `${dev_url}${currentSong.id}` }
/> */}



// refs: 
//https://reactjs.org/docs/refs-and-the-dom.html
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
// https://www.w3.org/2010/05/video/mediaevents.html


