import React from 'react';
import { Link, Route } from 'react-router-dom';
import musicNoteIcon from '../../../../../app/assets/images/music-note-pl.svg'
import searchIcon from '../../../../../app/assets/images/search-playlist.svg'

class CreatePlaylistForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { playlists, currentUser } = this.props;
    if (!playlists || !currentUser) return null;

    return (
      <div className="pl-create-container">
        {/* PLAYLIST CREATE HEADER */}
        <div className="pl-create-header">
          <div className="pl-create-art">
            <img src={musicNoteIcon} alt="playlist-art" id='pl-create-img' />
          </div>
          <div className="pl-create-info">
            <p className='pl-create-type'>PLAYLIST</p>
            <h1>My Playlist #001</h1>
            <h2>{currentUser.username}</h2>
          </div>
        </div>
        {/* PLAYLIST CREATE CONTENT */}
        <div className="pl-create-content">
          <h2>Let's find something for your playlist</h2>
          {/* <Search /> */}
          <div className="pl-create-search" >
            <img src={searchIcon} alt="search" />
            <input type="text" name="" id="pl-create-search-input" />
          </div>
        </div>


      </div>
    )
  }
}

export default CreatePlaylistForm;


const Search = () => {
  <form action="/" method="get">
    <label htmlFor="pl-create-search">
      <span className="visually-hidden">Search for songs</span>
    </label>
    <input 
      type="text" 
      name="s" 
      id="pl-create-search-input"
      placeholder='Search for songs'   
    />
  </form>
};

