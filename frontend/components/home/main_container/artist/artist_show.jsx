import React from 'react';
import Song from '../song/song_container';
import AlbumTile from '../album/album_tile';

import playIcon from '../../../../../app/assets/images/media_bar/play-solid.svg';
import puaseIcon from '../../../../../app/assets/images/media_bar/pause-solid.svg';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    let artistIdStr = this.props.match.params.artistId;
    this.props.fetchArtist(artistIdStr)
      .then((res) => {
        // debugger
        console.log(this.props)
      })
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.artist !== this.props.artist) {
      this.setState(this.props.artist);
    }
  }

  render(){
    const { artist } = this.props;
    if (!artist || !artist.albums) return null;

    if (!this.btnPlayPause) {
      this.btnPlayPause = playIcon;
    } 

    // debugger
    return(
      <div className='artist-show'>
        {/* <div className="main-header-temp"></div> */}
        {/* artist Show Header */}
        <div className="artist-show-header">
          <div className="artist-sh-art">
            <img src={artist.artistImgUrl} alt="artist-art" id='artist-sh-img' />
          </div>
          <div className="artist-sh-info">
            <p className='artist-sh-type'>ARTIST</p>
            <h1>{artist.name}</h1>
            
            <h2>{`${Math.floor(Math.random()*100)}M monthly listeners`}</h2>
          </div>
        </div>
        {/* artist Play Like */}
        <div className="artist-show-play-like">
          <div className="artist-sp-play-pause">
            <img id="li-play-pause-icon" src={this.btnPlayPause} alt="play-pause" />
          </div>
          {/* <button className="artist-sp-like"></button> */}
        </div>
        {/* artist album List */}
        <div className="artist-show-list-container">
          <span id="artist-pop-releases">Popular Releases</span>
          <div className="artist-show-list">
            {Object.values(artist.albums).map((album, index) => <AlbumTile album={album} index={index + 1} artistName={artist.name} key={album.id} />)}
          </div>
        </div>
      </div>
    )
  }
}

// const AlbumTile = () => {
//   <div className="album-tile-container">
//     <div className="at-art">
//       <img className="at-art-img" src="" alt="" />    
//     </div>
//     <div className="at-title"></div>  
//     <div className="at-year"></div>
//   </div>
// }


// Album style song list 
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
  );
}


export default ArtistShow;