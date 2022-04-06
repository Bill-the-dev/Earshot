import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { createPlaylist } from "../../actions/playlist_actions";
import Home from "./home";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default connect(mSTP, mDTP)(Home);


