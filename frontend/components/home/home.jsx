import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from '../../../app/assets/images/ear-listen-solid-white.svg'

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}

const Home = () => {
  return (
  <div className="home-container">
    {/* Left Menu Bar */}
    <div className="left-container">
      <div className="home-nav">
        <div className="logo">
          <img src={LogoWhite} alt="logo-white" className='logo-white'/>
          <p className="logo-text">Earshot</p>
        </div >
        <ul className="nav-large">
          <li className="nav-lg-item">Home</li>
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
    {/* Main Container */}
    <div className="main-container">
      
      <div className="main-header">
        <div className="mh-nav"></div>
        <div className="mh-username">
          <h3>currentUser</h3>
        </div>
      </div>
      
      <div className="main-content">
        <div className="m-greeting">Hello there</div>
        <div className="m-library-mix">
          <ul className="l-tiles">
            <li className="l-tile" id="l-tile-1">
              <div className="l-tile-art"></div>
              <p className="l-tile-title">lt-Tile</p>
            </li>
            <li className="l-tile" id="l-tile-2">
              <div className="l-tile-art"></div>
              <p className="l-tile-title">lt-Tile</p>
            </li>
            <li className="l-tile" id="l-tile-3">
              <div className="l-tile-art"></div>
              <p className="l-tile-title">lt-Tile</p>
            </li>
            <li className="l-tile" id="l-tile-4">
              <div className="l-tile-art"></div>
              <p className="l-tile-title">lt-Tile</p>
            </li>
            <li className="l-tile" id="l-tile-5">
              <div className="l-tile-art"></div>
              <p className="l-tile-title">lt-Tile</p>
            </li>
            <li className="l-tile" id="l-tile-6">
              <div className="l-tile-art"></div>
              <p className="l-tile-title">lt-Tile</p>
            </li>
          </ul>
        </div>
        <div className="m-suggestions">
          <p className="s-title">Things you might like</p>
          <ul className="s-row">
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
          </ul>
          <ul className="s-row">
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
            <li className="s-tile" id="s-tile-">
              <div className="s-tile-art"></div>
              <p className="s-tile-title">st-Title</p>
              <p className="s-tile-source">st-Source</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Media Footer */}
    <div className="media-footer">
      <div className="current-track">
        <div className="ct-art"></div>
        <div className="ct-track-info">
          <div className="ct-title">ct-Title</div>
          <div className="ct-artist">ct-Artist</div>
        </div>
        <div className="ct-like">{'<3'}</div>
      </div>
      <div className="media-player">Media Buttons</div>
      <div className="media-controls">Media Controls</div>
    </div>   
  </div>
)}

export default Home