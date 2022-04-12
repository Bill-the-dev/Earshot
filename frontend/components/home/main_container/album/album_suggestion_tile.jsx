import React from 'react';
import { Link, Route } from 'react-router-dom';

class AlbumSuggestionTile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // ;
    // console.log(this.props);
  }

  render() {
    const {album, artist} = this.props
    if (!album || !artist) return null

    return (
      <div className="album-tile-container">
        <Link to={`/home/albums/${album.id}`} className='artist-album-tile-link'>
          <div className="at-tile" >
            <div className="at-art">
              <img className="at-art-img" src={album.albumArtUrl} alt="album-art" />
            </div>
            <div className="at-title">{album.name}</div>
            <div className="at-artist-name">{`by ${artist.name}`}</div>
            <div className="at-year">{`${album.year}`}</div>
          </div>
        </Link>
      </div>
    );
  };
}


export default AlbumSuggestionTile;