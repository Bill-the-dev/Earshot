import React from 'react'
import AlbumSuggestionTile from './album/album_suggestion_tile';

const MainSuggestions = ({ artists, albums }) => {
  // 
  return (
    <div className="m-suggestions">
      <p className="s-title">Albums you might like</p>
      <ul className="s-row">
        {Object.values(albums).map((album, index) => 
          <AlbumSuggestionTile 
            album={album} 
            index={index + 1}  
            key={album.id}
            artist = {artists[album.artistId]} 
          />
        )}
      </ul>
      
    </div>
  )
}

export default MainSuggestions;



// <li className="s-tile" id="s-tile-">
//   <div className="s-tile-art"></div>
//   <p className="s-tile-title">st-Title</p>
//   <p className="s-tile-source">st-Source</p>
// </li>;
