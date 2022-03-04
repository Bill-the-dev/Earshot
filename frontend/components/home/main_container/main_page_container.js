import { connect } from "react-redux";
import { fetchSong, fetchSongs } from "../../../actions/song_actions";
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
  };
};

export default connect(mSTP, mDTP)(MainPage);