import React from 'react';
import MainHeader from '../main_header';
import Song from '../song/song_container';

// icons
import playIcon from '../../../../../app/assets/images/media_bar/play-solid.svg';
import pauseIcon from '../../../../../app/assets/images/media_bar/pause-solid.svg';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumSongs: [],
      // array of song ids to send to player
    };
    this.albumQueue = this.albumQueue.bind(this)
    this.simulateMouseClick = this.simulateMouseClick.bind(this)
  }

  componentDidMount() {
    let albumIdStr = this.props.match.params.albumId;
    this.props.fetchAlbum(albumIdStr);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.album !== this.props.album) {
      this.setState(this.props.album);
      let albumArr = Object.values(this.props.album.songs).map((song) => {
        return song.id
      })
      this.setState({
        albumSongs: albumArr 
      })
    }
  }

  albumQueue() {
    debugger
    const firstSong = document.getElementsByClassName("song-li-idx")[1];
    // this.props.receiveQueue(this.props.album.songs) 
    this.simulateMouseClick(firstSong)
  }

  simulateMouseClick(element) {
    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
    mouseClickEvents.forEach(mouseEventType =>
      element?.dispatchEvent(
        new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1
        })
      )
    );
  }


  render() {
    const { album, albumSongs } = this.props;
    if (!album || !album.songs || !album.name || !album.year ) return null;

    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    }

    debugger
    return (
      <div className="album-show">
        {/* <MainHeader />   */}
        {/* <div className="main-header-temp"></div> */}
        {/* Album Show Header */}
        <div className="album-show-header">
          <div className="album-sh-art">
            <img src={album.albumArtUrl} alt="album-art" id='album-sh-img' />
          </div>
          <div className="album-sh-info">
            <p className='album-sh-type'>ALBUM</p>
            <h1>{album.name}</h1>
            <h2>
              {album.artist.name} &#8226;
              {` ${album.year}`} &#8226; 
              {(Object.values(album.songs)?.length > 1)
                ? ` ${Object.values(album.songs)?.length} songs`
                : ` ${Object.values(album.songs)?.length} song`
              } </h2> 
          </div>
        </div>
        {/* Album Play Like */}
        <div className="album-show-play-like">
          <div className="album-sp-play-pause" onClick={() => this.albumQueue()}>
            <img id="li-play-pause-icon" src={this.btnPlayPause} alt="play-pause" />
          </div>
          {/* <button className="album-sp-like"></button> */}
        </div>
        {/* Album Song List */}
        <div className="album-show-list-container">
          <ul className="album-show-list">
            <ListHeader />
            {Object.values(album.songs).map((song, index) => <Song song={song} album={this.props.album} artist={this.props.album.artist} index={index} albumSongs={album.songs} albumArt={album.albumArtUrl} key={song.id} />)}
          </ul>
        </div>
      </div>
    );
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

        </div>
      </div>
    </li>
  );
};


export default AlbumShow;