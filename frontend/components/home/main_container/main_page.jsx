import React from "react";
import MainHeader from "./main_header_container";
import MainLibraryMix from "./main_library_mix";
import MainSuggestions from "./main_suggestions";
// import {fetchAlbums} from "../../../actions/album_actions"
// import {fetchArtists} from "../../../actions/artist_actions"
// import {fetchSongs} from "../../../actions/song_actions"

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
    return (
      <div className="main-page">
        {/* <MainHeader /> */}
        <div className="main-content">
          <div className="m-greeting">Hello there</div>
          <MainLibraryMix />
          <MainSuggestions />
        </div>
      </div>
    )
  } 
}

export default MainPage;