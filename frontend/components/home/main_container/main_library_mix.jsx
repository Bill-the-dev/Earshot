import React from 'react'

const MainLibraryMix = () => {
  return (
    <div className="m-library-mix">
      <ul className="l-tiles">
        <li className="l-tile" id="l-tile-1">
          <div className="l-tile-art"></div>
          <p className="l-tile-title">lt-Tile</p>
        </li>
        <li className="l-tile" id="l-tile-2">
          <div className="l-tile-art">
            <img className="lt-art" src="https://earshot-dev.s3.amazonaws.com/album-art/zombie.jpg"/>
          </div>
          <p className="l-tile-title">Zombie</p>
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
  )
}

export default MainLibraryMix;