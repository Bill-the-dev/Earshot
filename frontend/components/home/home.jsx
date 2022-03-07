import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg';

import MainPage from "./main_container/main_page_container";
import MediaFooter from "./media_footer/media_player_container";
import AlbumShow from "./main_container/album/album_container";

// NOTE: export at bottom looks like: 
// export default Home

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
    <Switch >
      <Route exact path='/home/albums/:albumId' component={AlbumShow} />
      <Route exact path='/home' component={MainPage} />
    </Switch>
    <MediaFooter /> 
  </div>
)}

const LeftMenuBar = () => {
  return (
    <div className="left-container">
      <div className="home-nav">
        <div className="logo">
          <img src={LogoWhite} alt="logo-white" className='logo-white'/>
          <p className="logo-text">Earshot</p>
        </div >
        <ul className="nav-large">
          <li className="nav-lg-item active" >Home</li>
          <li className="nav-lg-item">Search</li>
          <li className="nav-lg-item">Library</li>
        </ul>
        <ul className="nav-small">
          <li className="nav-sm-item">Create Playlist</li>
          <li className="nav-sm-item">Liked Songs</li>
          <li className="nav-sm-item">Your Episodes</li>
        </ul>
      </div>
      <hr /> 
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