import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg'

import MainContainer from "./main_container/main_container";
import MediaPlayer from "./media_footer/media_player.jsx"

// NOTE: export at bottom looks like: 
// export default Home

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}


const Home = () => {
  debugger
  return (
  <div className="home-container">
    <LeftMenuBar />
    <MainContainer />
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



const MediaFooter = () => {
  return (
    <div className="media-footer">
      <div className="current-track">
        <div className="ct-art"></div>
        <div className="ct-track-info">
          <div className="ct-title">ct-Title</div>
          <div className="ct-artist">ct-Artist</div>
        </div>
        <div className="ct-like">{'<3'}</div>
      </div>
      <div className="media-player">
        <MediaPlayer />
      </div>
      <div className="media-controls">Media Controls</div>
    </div> 
  )
}



export default Home