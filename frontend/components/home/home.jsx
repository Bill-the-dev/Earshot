import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import {AuthRoute} from "../../util/route_util"
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg';
// import menuHut from '../../../app/assets/images/left_menu_bar/menu-hut.svg';

// import menuHut from '../../../app/assets/images/left_menu_bar/menu-hut';
// import menuLoupe from '../../../app/assets/images/left_menu_bar/menu-Loupe';
// import menuLibrary from '../../../app/assets/images/left_menu_bar/menu-library';
import menuHome from '../../../app/assets/images/left_menu_bar/menu-home.svg';

import MainPage from "./main_container/main_page_container";
import MediaFooter from "./media_footer/media_footer_container";
import AlbumShow from "./main_container/album/album_container";
import ArtistShow from "./main_container/artist/artist_container";
import MainHeader from "./main_container/main_header_container";


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
          <img src={LogoWhite} alt="logo-white" className='logo-white'/>
          <p className="logo-text">Earshot</p>
        </div >
        <ul className="nav-large">
          <li className="nav-lg-item active" >
            <Link className='home-link' to={'/home'}>
              <img id="menu-home-icon" src={menuHome} alt="home" />
              <p>Home</p>
            </Link></li>
          <li className="nav-lg-item">
            {/* <img src={menuHut} alt="home" /> */}
          Search</li>
          <li className="nav-lg-item">Library</li>
        </ul>
        <ul className="nav-small">
          <li className="nav-sm-item">Create Playlist</li>
          <li className="nav-sm-item">Liked Songs</li>
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