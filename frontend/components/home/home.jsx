import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import {AuthRoute} from "../../util/route_util"
import logoWhite from '../../../app/assets/images/ear-listen-solid-white.svg';
import menuLibrary from '../../../app/assets/images/left_menu_bar/noun-library-3139956.svg';
import menuHome from '../../../app/assets/images/left_menu_bar/menu-home.svg';
import menuSearch from '../../../app/assets/images/left_menu_bar/noun-search-4032795.svg';
import createPlaylistIcon from '../../../app/assets/images/left_menu_bar/noun-plus-box.svg'
// import likedSongsIcon from '../../../app/assets/images/left_menu_bar/noun-heart-box.svg'

import MainPage from "./main_container/main_page_container";
import MediaFooter from "./media_footer/media_footer_container";
import AlbumShow from "./main_container/album/album_container";
import ArtistShow from "./main_container/artist/artist_container";
import MainHeader from "./main_container/main_header_container";
import CreatePlaylistForm from "./main_container/playlist/create_playlist_container";


function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}


const Home = () => {
  // debugger
  return (
  <div className="home-container">
    <LeftMenuBar />
    <MainHeader />
    <Switch >
      <AuthRoute path='/home/playlists/create' component={CreatePlaylistForm} />
      <AuthRoute path='/home/albums/:albumId' component={AlbumShow} />
      <AuthRoute path='/home/artists/:artistId' component={ArtistShow} />
      <AuthRoute path='/home' component={MainPage} />
    </Switch>
    <MediaFooter /> 
  </div>
)}

const LeftMenuBar = () => {
  return (
    <div className="left-container">
      <div className="home-nav">
        <div className="logo">
          <img src={logoWhite} alt="logo-white" className='logo-white'/>
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
            <Link className='home-link' to={'/home'}>
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
          <Link to={'/home/playlists/create'} className="nav-small-link">
            <img id="create-pl-icon" src={createPlaylistIcon} alt="create-playlist" />
            <li className="nav-sm-item">Create Playlist</li>
          </Link>
          <Link className="nav-small-link">
            {/* <img id="liked-songs-icon" src={likedSongsIcon} alt="liked-songs" /> */}
            <li className="nav-sm-item">Liked Songs</li>
          </Link>
        </ul>
      </div>
      <div className="border-line"></div>
      <div className="playlists">
        <ul className="pl-list">
          <li className="pl-item">Playlist 1</li>
          <li className="pl-item">Playlist 2</li>
          <li className="pl-item">Playlist 3</li>
          <li className="pl-item">Playlist 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Home