import React from 'react';
import { Route, Switch, NavLink, Link, withRouter } from 'react-router-dom';

// Icons
import logoWhite from '../../../../app/assets/images/ear-listen-solid-white.svg';
import menuLibrary from '../../../../app/assets/images/left_menu_bar/noun-library-3139956.svg';
import menuHome from '../../../../app/assets/images/left_menu_bar/menu-home.svg';
import menuSearch from '../../../../app/assets/images/left_menu_bar/noun-search-4032795.svg';
import createPlaylistIcon from '../../../../app/assets/images/left_menu_bar/noun-plus-box.svg';
import likedSongsIcon from '../../../../app/assets/images/left_menu_bar/noun-heart-box.svg';

// Components
import LeftPlaylists from './left_playlists_container';


class LeftMenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreatePlaylist = this.handleCreatePlaylist.bind(this);
  }

  handleCreatePlaylist() {
    debugger;
    // e.preventDefault();
    const userId = this.props.currentUser.id
    const playlistsLength = Object.values(this.props.playlists).length
    const playlistId = playlistsLength ? (playlistsLength + 1) : (1);
    this.props.createPlaylist({
      title: `My playlist #${playlistId}`,
      creator_id: userId
    })
      .then((response) => {
        debugger
        return(
          this.props.history.push(`/home/playlists/u${userId}/${response.playlist.id}`)
        )
      })
      // push string ensures no user/pl overlap
  }

  render() {

    return (
      <div className="left-container">
        <div className="home-nav">
          <div className="logo">
            <img src={logoWhite} alt="logo-white" className='logo-white' />
            <p className="logo-text">Earshot</p>
          </div >
          <ul className="nav-large">
            <li className="nav-lg-item active" >
              <Link className='home-link' to={'/home'}>
                <img id="menu-home-icon" src={menuHome} alt="home" />
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-lg-item">
              <Link className='home-link' to={'/home/search'}>
                <img id="menu-home-icon" src={menuSearch} alt="search" />
                <p>Search</p>
              </Link>
            </li>
            <li className="nav-lg-item">
              <Link className='home-link' to={'/home'}>
                <img id="menu-home-icon" src={menuLibrary} alt="search" />
                <p>Library</p>
              </Link>
            </li>
          </ul>
          {/* NAV-SMALL */}
          <ul className="nav-small">
            <Link to={'/home/playlists'} onClick={(e) => this.handleCreatePlaylist()} className="nav-small-link">
              <img id="create-pl-icon" src={createPlaylistIcon} alt="create-playlist" />
              <li className="nav-sm-item">Create Playlist</li>
            </Link>
            {/* <Link to={'/home/playlists/create'} className="nav-small-link">
              <img id="create-pl-icon" src={createPlaylistIcon} alt="create-playlist" />
              <li className="nav-sm-item">Create Playlist</li>
            </Link> */}
            <Link className="nav-small-link" to="/home">
              <img id="create-pl-icon" src={likedSongsIcon} alt="liked-songs" />
              <li className="nav-sm-item">Liked Songs</li>
            </Link>
          </ul>
        </div>
        <div className="border-line"></div>
        <LeftPlaylists />
      </div>
    );
  }
}

export default withRouter(LeftMenuBar)