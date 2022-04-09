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
      duration: null,
      parentEl: null,
      parentPlaylistId: null,
      queueSongs: []
    }

    this.songPlayback = this.songPlayback.bind(this)
    this.formatTime = this.formatTime.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.renderSwitch = this.renderSwitch.bind(this)
  }
  
  componentDidMount() {
    let audio = document.createElement('audio');   
    audio.src = this.props.song.songUrl;
    audio.onloadedmetadata = () => {
      // debugger
      const durationEl = document.getElementById(`song-li-${this.props.index}`)
      let audioDuration = this.formatTime(audio.duration);
      // durationEl.innerHTML = audioDuration
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
    // debugger
    let queueSongs = this.props.queueSongs
    console.log(this.props.queueSongs)
    this.props.receiveQueue(queueSongs);

    if (this.props.playback === true) {
      this.songPause();
    } else {
      this.songPlay()
    }
  }
  
  songPlay() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    // debugger
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

  handleAdd(e) {
    // console.log(e.currentTarget.parentNode.parentNode)
    console.log(this.props)

    const playlistId = this.props.parentPlaylistId
    const songId = this.props.song.id
    if(playlistId && songId) {
      // debugger
      console.log('valid')
      this.props.addPlaylistSong(playlistId, songId)
      .then(() => this.props.fetchPlaylists())
    }
  }

  handleRemove(e) {
    const playlistId = this.props.parentPlaylistId;
    const songId = this.props.song.id;
    if (playlistId && songId) {
      // debugger
      console.log('valid');
      this.props.removePlaylistSong(playlistId, songId)
        .then(() => this.props.fetchPlaylists());
    }
  }

  renderSwitch(props, activeSong) {
    // const {} = props
    switch (props.parentEl) {
      case 'album':
        return (
          <li
            className='song-li'
            onMouseEnter={() => this.toggleHover()}
            onMouseLeave={() => this.toggleHover()}>
            {(!this.state.hover)
              ? <div
                className="song-li-idx"
                onClick={e => this.songPlayback(e)}
                id={`song-${props.index + 1}`}
                style={activeSong}
              >{props.index}</div>
              : <div
                className="song-li-idx"
                onClick={e => this.songPlayback(e)}
                id={`song-${props.index}`}
                style={activeSong}
              >
                <img id="li-play-pause" src={playSolidWhite} alt="play-pause" />
              </div>
            }

            <div className="song-li-info-left">
              <div className="song-li-title" style={activeSong} >{props.song.title}</div>
              <Link to={`/home/artists/${props.artist.id}`} className="song-li-artist">
                <p>{props.artist.name}</p>
              </Link>
            </div>
            <div className="song-li-info-right">
              <div className="song-li-like"></div>
              <div className="song-li-duration" id={`song-li-${props.index}`} style={activeSong} ></div>
            </div>
          </li>
        ) 
      case 'playlist':
        return(
          <li
            className='song-li'
            onMouseEnter={() => this.toggleHover()}
            onMouseLeave={() => this.toggleHover()}>
            {(!this.state.hover)
              ? <div
                className="song-li-idx"
                onClick={e => this.songPlayback(e)}
                id={`song-${props.index + 1}`}
                style={activeSong}
              >{props.index}</div>
              : <div
                className="song-li-idx"
                onClick={e => this.songPlayback(e)}
                id={`song-${props.index}`}
                style={activeSong}
              >
                <img id="li-play-pause" src={playSolidWhite} alt="play-pause" />
              </div>
            }

            <div className="song-li-info-left">
              <div className="song-li-title" style={activeSong} >{props.song.title}</div>
              <Link to={`/home/artists/${props.artist.id}`} className="song-li-artist">
                <p>{props.artist.name}</p>
              </Link>
            </div>
            <div className="song-li-info-mid">
              <Link to={`/home/albums/${props.album.id}`} className="song-li-album">
                <p>{props.album.name}</p>
              </Link>
            </div>
            <div className="song-li-info-right">
              <div className="song-li-like"></div>
              <div className="song-li-duration" id={`song-li-${props.index}`} style={activeSong} ></div>
              <button className="btn-pl-remove" onClick={(e) => this.handleRemove(e)}>X</button>
              {/* <button className="btn-pl-remove" onClick={(e) => console.log(e.currentTarget)}>X</button> */}
            </div>
          </li>
        )
      case 'playlist-add':
        return(
          <li
            className='song-li'
            onMouseEnter={() => this.toggleHover()}
            onMouseLeave={() => this.toggleHover()}>
            {(!this.state.hover)
              ? <div
                className="song-li-idx"
                onClick={e => this.songPlayback(e)}
                id={`song-${props.index + 1}`}
                style={activeSong}
              ></div>
              : <div
                className="song-li-idx"
                onClick={e => this.songPlayback(e)}
                id={`song-${props.index}`}
                style={activeSong}
              >
                <img id="li-play-pause" src={playSolidWhite} alt="play-pause" />
              </div>
            }

            <div className="song-li-info-left">
              <div className="song-li-title" style={activeSong} >{props.song.title}</div>
              <Link to={`/home/artists/${props.artist.id}`} className="song-li-artist">
                <p>{props.artist.name}</p>
              </Link>
            </div>
            <div className="song-li-info-mid">{props.album.name}</div>
            <div className="song-li-info-right">
              <div className="song-li-like"></div>
              <div className="song-li-duration" id={`song-li-${props.index}`} style={activeSong} ></div>
              <button className="btn-pl-add" onClick={(e) => this.handleAdd(e)}>ADD</button>
            </div>
          </li>
        )

      // default:
    }
  }
  
  render() {
    // debugger
    // CONSTANTS
    const { index, song, albumSongs, artist } = this.props;  
    if (!index || !song || !artist) return null;
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

    // debugger
    // renders contextually based on the switch params above     
    return this.renderSwitch(this.props, activeSong)
  }
}

export default Song
