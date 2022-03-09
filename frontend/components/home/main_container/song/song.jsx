import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

 class Song extends React.Component {
  constructor(props) {
    super(props)

    this.formatTime = this.formatTime.bind(this)
  }
  
  componentDidMount() {
    this.getAudioContext()
  }
  
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
    return `${mins}:${formatSecs}`;
  }

  getAudioContext() { 
    const forceRender = () => { this.forceUpdate() } 
    let audio = document.createElement('audio');   
    audio.src = this.props.song.songUrl;
    audio.addEventListener('loadedmetadata', () => {
      const durationEl = document.getElementById(`song-li-${this.props.index}`)
      let duration = this.formatTime(audio.duration);
      durationEl.innerHTML = duration
      forceRender()
    })    
  }

  songPlayback(e) {
    console.log(e.target)
    console.log(this.props.song)
    debugger

  }
  
  render() {
    debugger
    const {index, song} = this.props
    if (!index || !song) return null;
    const audio = document.createElement('audio')
    audio.src = song.songUrl
    let duration = audio.duration
    
    // albumId: 2, id: 6, songUrl: "/You.m4a", title: "Nobody But You"
    return (
      <li className='song-li'>
        <div className="song-li-idx" onClick={e => this.songPlayback(e)} id={`song-${index}`} >{index}</div>
        <div className="song-li-info-left">
          <div className="song-li-title">{song.title}</div>
          <Link className="song-li-artist">Artist</Link>  
        </div>
        <div className="song-li-info-right">
          <div className="song-li-like">liked</div>
          <div className="song-li-duration" id={`song-li-${index}`}></div>
        </div>
      </li>
    )
  }
}

export default Song
