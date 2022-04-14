import React from 'react';
// icons
import playIcon from '../../../../app/assets/images/media_bar/play-solid.svg';
import pauseIcon from '../../../../app/assets/images/media_bar/pause-solid.svg';
import nextIcon from '../../../../app/assets/images/media_bar/forward-step-solid.svg';
import prevIcon from '../../../../app/assets/images/media_bar/backward-step-solid.svg';
import mutedIcon from '../../../../app/assets/images/media_bar/volume-xmark-solid.svg';
import volHighIcon from '../../../../app/assets/images/media_bar/volume-high-solid.svg';
import likeHeartWhite from '../../../../app/assets/images/media_bar/like-heart-white.svg';


// QUESTION: how to store const in document?


class MediaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: null,
      currentArtist: null
    };

    this.songPlayback = this.songPlayback.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.songNext = this.songNext.bind(this);
    this.songPrev = this.songPrev.bind(this);
    this.seekRange = this.seekRange.bind(this)
  }


  componentDidMount() { // accepts (prevProps, prevState) 
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.onloadedmetadata = () => {
      this.setState({ duration: audioEl.duration });
    };
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
    return `${mins}:${formatSecs}`;
  }


  songPlayback(e) {
    console.log(e.target);
    console.log(this.props.song);
    const playbackIcon = document.getElementById('play-pause-icon');

    if (this.props.currentSong && this.props.playback === true) {
      this.songPause();
      playbackIcon.src = playIcon;
    }
    if (this.props.currentSong && this.props.playback === false) {
      this.songPlay();
      playbackIcon.src = pauseIcon;
    }
  }

  songPlay() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    this.props.playSong();
    audioEl.play();
    audioEl.ontimeupdate = () => {
      this.props.fetchCurrentTime();
    };
  }

  songPause() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    this.props.pauseSong();
    audioEl.pause();
  }

  songNext() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon');
    let currentIdx = this.props.queue.indexOf(this.props.currentSong);
    // returns -1
    if (this.props.queue[currentIdx + 1]) {
      let newSong = this.props.queue[currentIdx + 1]
      // fetch song at that queue position
      this.props.fetchCurrentSong(newSong)
      // audioEl.src = newly fetched
      audioEl.src = newSong.songUrl  
      this.songPlay()
      playbackIcon.src = playIcon;
    }
  }

  songPrev() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon');
    let currentIdx = this.props.queue.indexOf(this.props.currentSong);
    // returns -1
    if (this.props.queue[currentIdx - 1]) {
      let newSong = this.props.queue[currentIdx - 1]
      // fetch song at that queue position
      this.props.fetchCurrentSong(newSong)
      // audioEl.src = newly fetched
      audioEl.src = newSong.songUrl  
      this.songPlay()
      playbackIcon.src = playIcon;
    }
  }

  seekRange(e) {
    e.preventDefault();
    const width = this.progressBar.getBoundingClientRect().width;
    const left = this.progressBar.getBoundingClientRect().left;
    const pos = (e.clientX - left) / width;  // pos 
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (!audioEl) return null;
    audioEl.currentTime = pos * this.props.duration;
  }

  muteAudio() {
    const muteIcon = document.getElementById('volume-icon');
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (audioEl.muted) {
      audioEl.muted = false;
      muteIcon.src = volHighIcon;
    } else {
      audioEl.muted = true;
      muteIcon.src = mutedIcon;
    }
  }

  updateVolume(e) {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.volume = (e.target.value * .01);
  }

  render() {
    // 
    const audioEl = document.getElementsByClassName("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon');
    const ctTrackTitle = document.getElementById('ct-title');

    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    } else if (this.props.playback === true) {
      playbackIcon.src = pauseIcon;
    } else {
      playbackIcon.src = playIcon;
    }
 
    return (
      <div className="media-footer">
        {/* TRACK INFO LEFT*/}
        { (this.props.currentSong)
          ? <div className="current-track">
              <div className="ct-art">
                <img src={this.props.currentSong.albumArtUrl} alt="album-art" id='album-sh-img' />
              </div>
              <div className="ct-track-info">
                <div className="ct-title">{this.props.currentSong.title}</div>
                <div className="ct-artist">{this.props.currentSong.artist.name}</div>
              </div>
              <div className="ct-like">
                <img src={likeHeartWhite} alt="like" />  
              </div>
            </div>
          : <div className="current-track">
              <div className="ct-art"></div>
              <div className="ct-track-info">
                <div className="ct-title"></div>
                <div className="ct-artist"></div>
              </div>
              <div className="ct-like"></div>
            </div>
        }
        {/* MEDIA CONTROLS CTR */}
        <div className="media-player">
          <audio className="audio-element" src={this.state.songUrl} preload="metadata"></audio>
          {/* MEDIA BUTTONS CTR */}
          <span className="media-controls">
            {/* PREV */}
            <button onClick={e => this.songPrev(e)} id="prev-btn">
              <img id="prev-icon" src={prevIcon} alt="prev" />
            </button>
            {/* PLAY / PAUSE */}
            <button onClick={e => this.songPlayback(e)} id="play-pause-btn">
              <img id="play-pause-icon" src={this.btnPlayPause} alt="play-pause" />
            </button>
            {/* NEXT */}
            <button onClick={e => this.songNext(e)} id="next-btn">
              <img id="next-icon" src={nextIcon} alt="next" />
            </button>
          </span>
          {/* Track Time */}
          <div className="track-time">
            <div id="current-track-time">{this.props.currentTimeShow}</div>
            <progress 
              id="time-range" 
              value={this.props.currentTime} 
              max={this.props.duration} 
              defaultValue="0" 
              onClick={e => this.seekRange(e)} 
              ref={progressBar => this.progressBar = progressBar}
            />
            <div id="duration" >{this.props.durationShow}</div>
          </div>
        </div>
        {/* MEDIA CONTROLS RIGHT */}
        <div className="media-controls">
          <button id="volume-button" onClick={this.muteAudio}>
            <img id="volume-icon" src={volHighIcon} alt="volume-mute" />
          </button>
          <output id="volume-output"></output>
          <input type="range" id="volume-slider" step='1' max="100" defaultValue="30" onChange={e => this.updateVolume(e)} />
        </div>
      </div>
    );
  }
}

export default MediaFooter;



// refs: 
//https://reactjs.org/docs/refs-and-the-dom.html
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
// https://www.w3.org/2010/05/video/mediaevents.html


