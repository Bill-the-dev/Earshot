import React from 'react'
import ArtistTile from './artist/artist_tile';

const MainLibraryMix = ({artists, albums}) => {
  
  return (
    <div className="m-library-mix">
      <ul className="l-tiles">
        {Object.values(artists).map((artist, index) => <ArtistTile artist={artist} index={index + 1} key={artist.id} />)}

      </ul>
    </div>
  )
}

export default MainLibraryMix;






{/* <li className="l-tile" id="l-tile-1">
  <div className="l-tile-art"></div>
  <p className="l-tile-title">lt-Tile</p>
</li> */}