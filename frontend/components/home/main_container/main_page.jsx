import React from "react";
import MainHeader from "./main_header_container";
import MainLibraryMix from "./main_library_mix_container";
import MainSuggestions from "./main_suggestion_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    // this.props.fetchSongs()
    this.props.fetchAlbums()
      .then(() => console.log(this.props))
    this.props.fetchArtists()
      .then(() => console.log(this.props))
  }

  render() {
    // if(this.props.artists && this.props.albums) {
    //   ({artists, albums}) = this.props
    // }

    return (
      <div className="main-page">
        {/* <MainHeader /> */}
        <div className="main-content">
          <div className="m-greeting">Hello there</div>
          <h3>Recently played</h3>
          <MainLibraryMix />
          <MainSuggestions />
        </div>
      </div>
    )
  } 
}

export default MainPage;









// const MainLibraryMix = (artist, album) => {

//   return (
//     <div className="m-library-mix">
//       <ul className="l-tiles">
//         {Object.values(artists).map((artist, index) => 
//           <ArtistTile 
//             artist={artist} 
//             index={index + 1} 
//             key={artist.id} 
//           />
//         )}

//         {/* <li className="l-tile" id="l-tile-1">
//           <div className="l-tile-art"></div>
//           <p className="l-tile-title">lt-Tile</p>
//         </li> */}
//       </ul>
//     </div>
//   );
// }
