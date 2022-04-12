import React from 'react';
import { Link, Route } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // ;
    // console.log(this.props);
  }

  render() {
    const { playlists } = this.props;
    if (!playlists) return null;

    return (


      <div className="left-playlists-container">
        <ul className="pl-list">
          {Object.values(playlists).map((playlist, index) => 
            <Link to={`/home/playlists/${playlist.id}`} className='playlist-item-link'>
              <li className='pl-item' key={``} >{playlist.name}</li>
            </Link>
          )}

          {/* <li className="pl-item">Playlist 1</li>
          <li className="pl-item">Playlist 2</li>
          <li className="pl-item">Playlist 3</li>
          <li className="pl-item">Playlist 4</li> */}
        </ul>
      </div>
      // <div className="-container">
      //   <Link to={`/home/albums/${album.id}`} className='artist-album-tile-link'>
      //     <div className="at-tile" >
      //       <div className="at-art">
      //         <img className="at-art-img" src={album.albumArtUrl} alt="album-art" />
      //       </div>
      //       <div className="at-title">{album.name}</div>
      //       <div className="at-artist-name">{`by ${artist.name}`}</div>
      //       <div className="at-year">{`${album.year}`}</div>
      //     </div>
      //   </Link>
      // </div>
    );
  };
}


export default AlbumSuggestionTile;