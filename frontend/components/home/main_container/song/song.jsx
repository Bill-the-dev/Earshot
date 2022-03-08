import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

 class Song extends React.Component {
  render() {
    return (
      <li className='song-li'>
        <div className="song-li-idx">#</div>
        <div className="song-li-info-left">
          <div className="song-li-title">Title</div>
          <Link className="song-li-artist">Artist</Link>  
        </div>
        <div className="song-li-info-right">
          <div className="song-li-like">liked</div>
          <div className="song-li-duration">2:34</div>
        </div>
      </li>
    )
  }
}

export default Song
