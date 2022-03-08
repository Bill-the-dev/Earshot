import React from 'react';
import MainHeader from '../main_header';
import Song from '../song/song';

// icons
import playIcon from '../../../../../app/assets/images/media_bar/play-solid.svg';
import pauseIcon from '../../../../../app/assets/images/media_bar/pause-solid.svg';

class AlbumShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      albumSongs: [],
    }
    debugger
  }

  componentDidMount() {
    let albumIdStr = this.props.match.params.albumId;
    this.props.fetchAlbum(albumIdStr)
      .then(() => {
        each > 
        this.props.fetchSong(i)
        debugger
      })

    debugger

  }

  componentDidUpdate(prevProps) {
    if(prevProps.album !== this.props.album){
      this.setState(this.props.album)
    }
    console.log('in update')
    debugger
  }

  playAudio() {
    // const audioEl = document.getElementsByClassName
    // ("audio-element")[0];
    const playbackIcon = document.getElementById('play-pause-icon')
    debugger
  
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
    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    } 


    debugger
    return (
      <div className="album-show">
        {/* <MainHeader />   */}
        <div className="main-header-temp"></div>
        {/* Album Show Header */}
        <div className="album-show-header">
          <div className="album-sh-art"></div>
          <div className="album-sh-info">
            <p>ALBUM</p>
            <h1>Album Name</h1>
            <h2>Artist Name | Album Year | #Songs | Duration</h2>    
          </div>  
        </div>
        {/* Album Play Like */}
        <div className="album-show-play-like">
          <button className="album-sp-play">
            <img id="li-play-pause-icon" src={this.btnPlayPause} alt="play-pause" />    
          </button>
          <button className="album-sp-like">like</button>
        </div>
        {/* Album Song List */}
        <div className="album-show-list-container">
          <ul className="album-show-list">
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
          </ul>
        </div>
      </div>
    )
  }
}


export default AlbumShow