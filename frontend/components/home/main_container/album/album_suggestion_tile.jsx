import React from 'react';
import { Link, Route } from 'react-router-dom';

class AlbumSuggestionTile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    console.log(this.props);
  }

  render() {

    return (
      <div className="album-tile-container">
        <Link to={`/home/albums/${this.props.album.id}`} className='artist-album-tile-link'>
          <div className="at-tile" >
            <div className="at-art">
              <img className="at-art-img" src={this.props.album.albumArtUrl} alt="" />
            </div>
            <div className="at-title">{this.props.album.name}</div>
            <div className="at-artist-name">{`by ${this.props.artist.name}`}</div>
            <div className="at-year">{`${this.props.album.year}`}</div>
          </div>
        </Link>
      </div>
    );
  };
}


export default AlbumSuggestionTile;