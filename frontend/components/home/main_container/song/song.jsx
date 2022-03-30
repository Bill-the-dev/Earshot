import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import pauseIcon from '../../../../../app/assets/images/pause-solid.svg'
// import playIcon from '../../../../../app/assets/images/play-solid.svg'
// import { fetchCurrentSong } from '../../../../actions/media_actions';

 class Song extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      song: this.props.song,
      duration: null
    }

    this.songPlayback = this.songPlayback.bind(this)
    this.formatTime = this.formatTime.bind(this)
  }
  
  componentDidMount() {
    // this.getAudioContext()
    let audio = document.createElement('audio');   
    audio.src = this.props.song.songUrl;
    audio.onloadedmetadata = () => {
      const durationEl = document.getElementById(`song-li-${this.props.index}`)
      let duration = this.formatTime(audio.duration);
      // this.setState(duration)
      durationEl.innerHTML = duration
      // forceRender()
    }    
  }
  
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
    return `${mins}:${formatSecs}`;
  }

  songPlayback(e) {
    console.log(e.target)
    console.log(this.props.song)

    if (this.props.playback === true) {
      // debugger
      this.songPause();
    } else {
      this.songPlay()
    }
  }
  
  songPlay() {
    const audioEl = document.getElementsByClassName("audio-element")[0];

    if (!this.props.song || this.props.currentSong !== this.props.song) {  
      // if target is empty or not current song, assign and play it! 
      this.props.fetchCurrentSong(this.props.song);
      this.props.playSong()
      audioEl.src = this.props.song.songUrl
      audioEl.play()
      audioEl.onloadedmetadata = () => {
        // debugger
        this.props.fetchDuration()
      }
      audioEl.ontimeupdate = () => {
        this.props.fetchCurrentTime();
      }
    } 
    if (this.props.currentSong) {
      this.props.playSong()
      audioEl.play()
    }
  }

  songPause() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    this.props.pauseSong()
    audioEl.pause()
  }
  
  render() {
    // debugger

    
    const {index, song} = this.props
    if (!index || !song) return null;
    const audio = document.createElement('audio')
    audio.src = song.songUrl
    let duration = audio.duration
    

    return (
      <li className='song-li'>
        <div className="song-li-idx" onClick={e => this.songPlayback(e)} id={`song-${index}`} >{index}</div>
        <div className="song-li-info-left">
          <div className="song-li-title">{song.title}</div>
          <Link className="song-li-artist">Artist</Link>  
        </div>
        <div className="song-li-info-right">
          <div className="song-li-like"></div>
          <div className="song-li-duration" id={`song-li-${index}`}></div>
        </div>
      </li>
    )
  }
}

export default Song
