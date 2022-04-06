import React from 'react';
import { Link, Route } from 'react-router-dom';
import musicNoteIcon from '../../../../../app/assets/images/music-note-pl.svg';
import searchIcon from '../../../../../app/assets/images/search-playlist.svg';
import Song from '../song/song_container';


class CreatePlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSongs: [],
      filterSongs: [],
      filterArtists: []
    };
    this.searchUpdate = this.searchUpdate.bind(this)
  }

  componentDidMount() {
    debugger;
    this.props.fetchSongs()
      .then(() => this.setState({
        allSongs: Object.values(this.props.songs)
      }));
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps.songs !== this.props.songs)
  //   this.setState()
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.album !== this.props.album) {
  //     this.setState(this.props.album);
  //     let albumArr = Object.values(this.props.album.songs).map((song) => {
  //       return song.id;
  //     });
  //     this.setState({
  //       albumSongs: albumArr
  //     });
  //   }
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
    // resSongs = this.state.allSongs.filter(songObj => (
    //   songObj.title.includes(input.value) || songObj.artist.name.includes(input.value)
    // ));
    console.log(resSongs)
    console.log(resArtists)
    // return filterSongs;
    this.setState({
      filterSongs: resSongs,
      filterArtists: resArtists
    })
  }

  render() {
    debugger;
    const { playlists, currentUser, songs } = this.props;
    const filterSongs = this.state.filterSongs
    if (!playlists || !currentUser) return null;

    // this.state.songs.title
    // this.state.songs.artist.name

    const resultsList = () => {
      debugger
      const filterSongs = this.state.filterSongs
      return (
        (filterSongs && filterSongs.length > 1)

          ? < ul className="plc-create-results" >
            {filterSongs.map((song, index) => {
              debugger 
              return(
                <Song 
                  song={song} 
                  album={song.album} 
                  artist={song.artist} 
                  index={index + 1} 
                  // albumArt={album.albumArtUrl} 
                  key={song.id}
                  parentEl='search'
                />

              )})
            }
            </ul >
            
            
          : < ul className="plc-create-results" >
              <li>False</li>       
            </ul>
      )
    }

    return (
      <div className="pl-create-container">
        {/* PLAYLIST CREATE HEADER */}
        <div className="pl-create-header">
          <div className="pl-create-art">
            <img src={musicNoteIcon} alt="playlist-art" id='pl-create-img' />
          </div>
          <div className="pl-create-info">
            <p className='pl-create-type'>PLAYLIST</p>
            <h1>My Playlist #001</h1>
            <h2>{currentUser.username}</h2>
          </div>
        </div>
        {/* PLAYLIST CREATE CONTENT */}
        <div className="pl-create-content">
          <h2>Let's find something for your playlist</h2>
          {/* <Search /> */}
          <div className="pl-create-search" >
            {/* <img src={searchIcon} alt="search" /> */}
            <input
              type="text"
              name="s"
              id="pl-create-search-input"
              placeholder='Search for songs'
              onChange={() => this.searchUpdate()}
            />
            {/* <input type="text" name="" id="pl-create-search-input" /> */}
          </div>
          <div className="plc-results-container">
            {/* {resultsList()} */}
            {(Object.values(filterSongs).length > 0)
              ? < ul className="plc-create-results" >
                  <ListHeader />
                  {Object.values(filterSongs).map((song, index) => {
                    debugger
                    return (
                    <Song
                      song={song}
                      album={song.album}
                      artist={song.artist}
                      index={index + 1}
                      // albumArt={album.albumArtUrl} 
                      key={song.id}
                      parentEl='search'
                    /> )
                  })}
                </ul >

              : < ul className="plc-create-results" >
                  <li>False</li>
                </ul>
            } 
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylistForm;

const ListHeader = () => {
  return (
    <li className='song-li-header'>
      <div className="song-li-idx">#</div>
      <div className="song-li-info-left">
        <div className="song-li-title">TITLE</div>
      </div>
      <div className="song-li-info-right">
        <div className="song-li-like"></div>
        <div className="song-li-duration" id="">

        </div>
      </div>
    </li>
  );
};


const Search = () => {
  <form action="/" method="get">
    <label htmlFor="pl-create-search">
      <span className="visually-hidden">Search for songs</span>
    </label>
    <input
      type="text"
      name="s"
      id="pl-create-search-input"
      placeholder='Search for songs'
    />
    <img src={searchIcon} alt="search" />
    {/* no buttons, onUpdate */}
  </form>;
};

