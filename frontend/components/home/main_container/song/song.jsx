import React from 'react'

 class Song extends React.Component {
  render() {
    return (
      <li className='song-li'>
        <div className="song-li-idx">#</div>
        <div className="song-li-info">
          <div className="song-li-title">Title</div>
          <Link className="song-li-artist">Artist</Link>  
        </div>
        <div className="song-li-duration">2:34</div>
      </li>
    )
  }
}

export default Song
