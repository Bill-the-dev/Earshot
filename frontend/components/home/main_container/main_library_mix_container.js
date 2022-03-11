import { connect } from "react-redux";
import { fetchArtist} from "../../../actions/artist_actions"
import { fetchAlbum } from "../../../actions/album_actions";
import { fetchSong } from "../../../actions/song_actions";
import MainLibraryMix from "./main_library_mix";

const mSTP = (state) => {
  return {
    artists: state.entities.artists,
    albums: state.entities.albums
  };
};

const mDTP = (dispatch) => {
  return {
    fetchArtist: (artist) => dispatch(fetchArtist(artist)),
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchSong: (songId) => dispatch(fetchSong(songId))
  };
};

export default connect(mSTP, mDTP)(MainLibraryMix);