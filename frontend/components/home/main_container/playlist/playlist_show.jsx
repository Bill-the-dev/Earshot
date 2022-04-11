import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import musicNoteIcon from '../../../../../app/assets/images/music-note-pl.svg';
import searchIcon from '../../../../../app/assets/images/search-playlist.svg';
import Song from '../song/song_container';



class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      filterSongs: [],
      filterArtists: [],
      playlistSongs: [],
      playlistLength: null
    };
    this.searchUpdate = this.searchUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    // debugger;
    this.props.fetchSongs()
      .then(() => {
        this.setState({
          allSongs: Object.values(this.props.songs), 
        }) 
      })
  }

  setPlaylistSongs(song, index) {
    const playlistIdx = this.props.match.params.id;
    const playlist = this.props.playlists[playlistIdx];

    let playlistSongsArr = this.state.playlistSongs
    if (playlistSongsArr[index] !== song && this.state.playlistSongs.length < playlist.songs.length) {
      playlistSongsArr.push(song)
      this.setState({
        playlistSongs: playlistSongsArr
      }) 
    }
  }
  
  // componentDidUpdate(prevProps){
  //   debugger
    // const playlistIdx = this.props.match.params.id;
    // const playlist = this.props.playlists[playlistIdx];

    // if (prevProps.playlists[playlistIdx] !== playlist){
    //   this.setState({
    //     playlistLength: playlist.length
    //   })
    // }
  // }

  searchUpdate() {
    // debugger
    const input = document.getElementById("pl-create-search-input");
    let resSongs = [];
    let resArtists = [];
    for (let i = 0; i < this.state.allSongs.length; i++) {
      const songObj = this.state.allSongs[i];
      if (songObj.title.includes(input.value)) {
        resSongs.push(songObj)
      } else if (songObj.artist.name.includes(input.value) && resArtists.indexOf(songObj.artist) === -1) {
      // } else if (songObj.artist.name.includes(input.value) && !resArtists.includes(songObj.artist.id)) {
      // Both push multiple copies of the artist object for each song
        // debugger
        resArtists.push(songObj.artist)
      }
    }
    // console.log(resSongs)
    // console.log(resArtists)

    this.setState({
      filterSongs: resSongs,
      filterArtists: resArtists
    })
  }

  handleDelete() {
    debugger
    this.props.deletePlaylist(this.props.match.params.id)
      .then(() => this.props.fetchPlaylists())
      .then(this.props.history.push(`/home`))
  }

  render() {
    // debugger;
    const filterSongs = this.state.filterSongs
    const playlistIdx = this.props.match.params.id
    const playlist = this.props.playlists[playlistIdx];
    const { playlists, currentUser, songs } = this.props;
    if (!playlists || !currentUser || !playlist || !songs ) return null;

    debugger
    return (
      <div className="pl-create-container">
        {/* PLAYLIST CREATE HEADER */}
        <div className="pl-create-header">
          <div className="pl-create-art">
            <img src={musicNoteIcon} alt="playlist-art" id='pl-create-img' />
          </div>
          <div className="pl-create-info">  
          {/* onClick open modal to edit pl info, save and delete button? */}
            <p className='pl-create-type'>PLAYLIST</p>
            <h1 className='pl-title-click' onClick={() => this.props.openModal('PlaylistEdit')}>{playlist.title}</h1>
            <h2>{currentUser.username}</h2>
            <button className="pl-btn-delete"onClick={() => this.handleDelete()}>Delete</button>
          </div>
        </div>

        
        {/* PLAYLIST CREATE CONTENT */}
        <div className="pl-create-content">
          {/* PLAYLIST SONGS */}
          {/* <PlaylistSongs playlist={playlist} songs={songs} /> */}
          <div className='pl-songs-container'>
            {/* {(Object.values(songs).length && Object.values(playlist.songs).length > 0) */}
            {(Object.values(songs).length && playlist.songs.length > 0)
              ? <ul className="pl-songs-list">
                <PlaylistHeader />
                {playlist.songs.map((song, index) => {
                  debugger;
                  let songObj = songs[song.id]
                  this.setPlaylistSongs(songObj, index)
                  return (
                    // <li>{` ${index} - ${song.title}`}</li>
                    <Song 
                      song={songObj}
                      album={songObj.album}
                      artist={songObj.artist}
                      index={index + 1}
                      // queueSongs={[]}
                      queueSongs={Object.assign({}, { ...this.state.playlistSongs }) }
                      // albumArt={album.albumArtUrl} 
                      key={`${index}${songObj.id}`}
                      parentEl='playlist'
                      parentPlaylistId={playlist.id}
                    />
                  );
                })}
                {/* {this.setPlaylistSongs()} */}
              </ul>
              : <></>

            }
          </div>


          {/* <Search /> */}
          <h2>Let's find something for your playlist</h2>
          <div className="pl-create-search" >
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            {/* <div>&#f002;</div> */}
            <label>
              <img src={searchIcon} alt="" />
              <input
              type="text"
              name="s"
              id="pl-create-search-input"
              // placeholder="&#f002;"
              placeholder="Search for songs"
              autoComplete="off"
              onChange={() => this.searchUpdate()}
              />
            </label>
          </div>
          <div className="plc-results-container">
            {/* {resultsList()} */}
            {(Object.values(filterSongs).length > 0)
              ? < ul className="plc-create-results" >
                  <ResultHeader />
                  {Object.values(filterSongs).map((song, index) => {
                    // debugger
                    return (
                    <Song
                      song={song}
                      album={song.album}
                      artist={song.artist}
                      index={index + 1}
                      queueSongs={this.state.playlistSongs}
                      // albumArt={album.albumArtUrl} 
                      key={song.id}
                      parentEl='playlist-add'
                      parentPlaylistId={playlist.id}
                    /> )
                  })}
                </ul >

              : < ul className="plc-create-results" >
                  <li></li>
                </ul>
            } 
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistShow);

class PlaylistSongs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    debugger
    return (
      <div className='pl-songs-container'>
        {(this.props.playlist && this.props.playlist.songs.length > 0)
          ? <ul className="pl-songs-list">
              <PlaylistHeader />
              {this.props.playlist.songs.map((song, index) => {
                debugger
                // let songObj = this.props.songs[song.id]
                return(
                  <li>{` ${index} - ${song.title}`}</li>
                  // <Song 
                  //   // song={songObj}
                  //   // album={songObj.album}
                  //   // artist={songObj.artist}
                  //   // index={index + 1}
                  //   // queueSongs={this.props.playlist.songs}
                  //   // // albumArt={album.albumArtUrl} 
                  //   // key={songObj.id}
                  //   // parentEl='playlist'
                  //   // parentPlaylistId={playlist.id}
                  // />
                )
              })}
            </ul>
          : <></>
  
        }
      </div>
    )
  }
}

const ResultHeader = () => {
  return (
    <li className='song-li-header'>
      <div className="song-li-idx"></div>
      <div className="song-li-info-left">
        <div className="song-li-title">TITLE</div>
      </div>
      <div className="song-li-info-mid">ALBUM</div>
      <div className="song-li-info-right">
        <div className="song-li-like"></div>
        <div className="song-li-duration" id="">

        </div>
      </div>
    </li>
  );
};

const PlaylistHeader = () => {
  return (
    <li className='song-li-header'>
      <div className="song-li-idx">#</div>
      <div className="song-li-info-left">
        <div className="song-li-title">TITLE</div>
      </div>
      <div className="song-li-info-mid">ALBUM</div>
      <div className="song-li-info-right">
        <div className="song-li-like"></div>
        <div className="song-li-duration" id="">

        </div>
      </div>
    </li>
  );
};




// const Search = () => {
//   <form action="/" method="get">
//     <label htmlFor="pl-create-search">
//       <span className="visually-hidden">Search for songs</span>
//     </label>
//     <input
//       type="text"
//       name="s"
//       id="pl-create-search-input"
//       placeholder='Search for songs'
//     />
//     <img src={searchIcon} alt="search" />
//     {/* no buttons, onUpdate */}
//   </form>;
// };

