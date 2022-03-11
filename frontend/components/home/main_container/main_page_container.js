import { connect } from "react-redux";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";
import { fetchAlbum, fetchAlbums } from "../../../actions/album_actions";
import { fetchArtist, fetchArtists } from "../../../actions/artist_actions";
import MainPage from "./main_page";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]

  };
};

const mDTP = (dispatch) => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id))
  };
};

export default connect(mSTP, mDTP)(MainPage);