import React from 'react'
import searchIcon from '../../../../../app/assets/images/search-show.svg'
import Song from '../song/song_container'


class SearchShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allSongs: [],
      filterSongs: [],
      filterArtists: [],
      filterAlbums: [],
      filterPlaylists: []
    }

    this.searchUpdate = this.searchUpdate.bind(this)
  }

  componentDidMount() {
    // ;
    this.props.fetchSongs()
      .then(() => {
        this.setState({
          allSongs: Object.values(this.props.songs),
        });
      });
  }

  searchUpdate() {
    // 
    const input = document.getElementById("search-show-input");
    let resSongs = [];
    let resArtists = [];
    for (let i = 0; i < this.state.allSongs.length; i++) {
      const songObj = this.state.allSongs[i];
      if (songObj.title.includes(input.value)) {
        resSongs.push(songObj);
      } 
    }
    
    this.setState({
      filterSongs: resSongs,
      filterArtists: resArtists
    });

    // console.log(resSongs)
    // console.log(resArtists)

  }

  render() {
    const filterSongs = this.state.filterSongs;
    const { currentUser, songs } = this.props;
    if (!currentUser || !songs) return null;
    
    return (
      <div className='search-show-container'>
        {/* SEARCH HEADER */}
        <div className="search-header">
          <label>
            <img src={searchIcon} alt="" />
            <input
              type="text"
              name="s"
              id="search-show-input"
              placeholder="Search for songs"
              autoComplete="off"
              onChange={() => this.searchUpdate()}
            />
          </label>
        </div>
        {/* SEARCH RESULTS */}
        <div className="search-results-container">
          <h1 className="search-bucket-title">Songs</h1>
          {
            (Object.values(filterSongs).length > 0)
            ? < ul className="plc-create-results" >
              <ResultHeader />
              {Object.values(filterSongs).map((song, index) => {
                // 
                return (
                  <Song
                    song={song}
                    album={song.album}
                    artist={song.artist}
                    index={index + 1}
                    queueSongs={[]}
                    // albumArt={album.albumArtUrl} 
                    key={song.id}
                    parentEl='search-show'
                  />);
                })}
              </ul >

            : < ul className="plc-create-results" >
                <li></li>
              </ul>
          } 
        </div>
      </div>
    )
  }

}

export default SearchShow



const ResultHeader = () => {
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