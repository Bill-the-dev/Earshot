import { connect } from "react-redux";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";
import { fetchAlbum, fetchAlbums } from "../../../util/album_util";
import MainPage from "./main_page";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]

  };
};

const mDTP = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: () => dispatch(fetchSong()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: () => dispatch(fetchAlbum())
  };
};

export default connect(mSTP, mDTP)(MainPage);