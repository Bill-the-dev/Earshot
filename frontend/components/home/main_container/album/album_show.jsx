import React from 'react';
import MainHeader from '../main_header';
import Song from '../song/song_container';

// icons
import playIcon from '../../../../../app/assets/images/media_bar/play-solid.svg';
import pauseIcon from '../../../../../app/assets/images/media_bar/pause-solid.svg';

class AlbumShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      albumSongs: [],
    }
    // debugger
  }

  componentDidMount() {
    let albumIdStr = this.props.match.params.albumId;
    this.props.fetchAlbum(albumIdStr)

    // debugger

  }

  componentDidUpdate(prevProps) {
    if(prevProps.album !== this.props.album){
      this.setState(this.props.album)
    }
    console.log('in update')
    // debugger
  }

  playAudio() {
    // const audioEl = document.getElementsByClassName
    // ("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon')
    // debugger
  
    // if (audioEl.paused) {
    //   audioEl.play()
    //   playbackIcon.src = pauseIcon;
    //   audioEl.addEventListener('timeupdate', e => {
    //     this.currentRangeTime()
    //   })
    //   // playState ?
    // } else {
    //   audioEl.pause()     
    //   playbackIcon.src = playIcon;
    //   this.currentRangeTime()
    //   // playState ?
    // }
  }

  render() {
    const {album} = this.props;
    if (!album) return null;

    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    } 


    //here!
    // debugger
    return (
      <div className="album-show">
        {/* <MainHeader />   */}
        <div className="main-header-temp"></div>
        {/* Album Show Header */}
        <div className="album-show-header">
          <div className="album-sh-art">
            <img src={album.albumArtUrl} alt="album-art" id='album-sh-img'/>
          </div>
          <div className="album-sh-info">
            <p className='album-sh-type'>ALBUM</p>
            <h1>{album.name}</h1>
            <h2>Artist Name</h2> 
            <h2>{album.year}| #Songs | Duration</h2>    
          </div>  
        </div>
        {/* Album Play Like */}
        <div className="album-show-play-like">
          <div className="album-sp-play-pause">
            <img id="li-play-pause-icon" src={this.btnPlayPause} alt="play-pause" />    
          </div>
          <button className="album-sp-like"></button>
        </div>
        {/* Album Song List */}
        <div className="album-show-list-container">
          <ul className="album-show-list">
            <ListHeader />
            {Object.values(album.songs).map((song, index) => <Song song={song} index={index + 1} albumArt={album.albumArtUrl} key={song.id}/>)}
          </ul>
        </div>
      </div>
    )
  }
}

const ListHeader = () => {
  return (
    <li className='song-li-header'>
      <div className="song-li-idx">#</div>
      <div className="song-li-info-left">
        <div className="song-li-title">TITLE</div> 
      </div>
      <div className="song-li-info-right">
        <div className="song-li-like"></div>
        <div className="song-li-duration" id="">
          clock
        </div>
      </div>
    </li>
  )
}


export default AlbumShow