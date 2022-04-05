import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import playSolidWhite from '../../../../../app/assets/images/media_bar/play-solid-white.svg'
import pauseSolidWhite from '../../../../../app/assets/images/media_bar/pause-solid-white.svg'

 class Song extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      song: this.props.song,
      hover: false,
      duration: null
    }

    this.songPlayback = this.songPlayback.bind(this)
    this.formatTime = this.formatTime.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }
  
  componentDidMount() {
    let audio = document.createElement('audio');   
    audio.src = this.props.song.songUrl;
    audio.onloadedmetadata = () => {
      debugger
      const durationEl = document.getElementById(`song-li-${this.props.index}`)
      let audioDuration = this.formatTime(audio.duration);
      durationEl.innerHTML = audioDuration
      // this.setState({ duration: audioDuration })
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
    debugger
    let queueSongs = this.props.album.songs
    this.props.receiveQueue(queueSongs);

    if (this.props.playback === true) {
      this.songPause();
    } else {
      this.songPlay()
    }
  }
  
  songPlay() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    debugger
    if (!this.props.song || this.props.currentSong !== this.props.song) {  
      // if target is empty or not current song, assign and play it! 
      this.props.fetchCurrentSong(this.props.song);
      // this.props.receiveQueue(this.props.album.songs);
      this.props.playSong()
      audioEl.src = this.props.song.songUrl
      audioEl.play()
      audioEl.onloadedmetadata = () => {
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

  toggleHover(e) { 
    (!this.state.hover)
      ? this.setState({ hover: true })
      : this.setState({ hover: false })
    // e.currentTarget.innerHTML = this.liHoverTrue
      
  }
  
  render() {
    // CONSTANTS
    const { index, song, albumSongs, artist } = this.props;  
    if (!index || !song || !artist || !albumSongs) return null;
    const liPlayPause = document.getElementById('li-play-pause');
    const audio = document.createElement('audio');
    audio.src = song.songUrl;

    // PLAYING COLOR
    const activeSong = (this.props.currentSong?.id === this.props.song?.id)
      ? { color: 'var(--green)'}
      : {color: 'white'}

    // HOVER 
    if (this.props.playback === true && this.state.hover === true) {
      setTimeout(() => {
        liPlayPause.src = pauseSolidWhite;
      }, 100);
    } else if (this.props.playback === false && this.state.hover === true) {
      setTimeout(() => {
        liPlayPause.src = playSolidWhite;
      }, 100);
    }


    return (
      <li 
        className='song-li' 
        onMouseEnter={() => this.toggleHover()} 
        onMouseLeave={() => this.toggleHover()}>
          {(!this.state.hover)
          ? <div 
              className="song-li-idx" 
              onClick={e => this.songPlayback(e)} 
              id={`song-${index + 1}`}
              style={activeSong} 
            >{index}</div>
          : <div 
              className="song-li-idx" 
              onClick={e => this.songPlayback(e)} 
              id={`song-${index}`}
              style={activeSong}   
            >
              <img id="li-play-pause" src={playSolidWhite} alt="play-pause" />
            </div>
        }
        
        <div className="song-li-info-left">
          <div className="song-li-title" style={activeSong} >{song.title}</div>
          <Link to={`/home/artists/${artist.id}`} className="song-li-artist">
            <p>{artist.name}</p>
          </Link>  
        </div>
        <div className="song-li-info-right">
          <div className="song-li-like"></div>
          <div className="song-li-duration" id={`song-li-${index}`} style={activeSong} ></div>
        </div>
      </li>
    )
  }
}

export default Song
