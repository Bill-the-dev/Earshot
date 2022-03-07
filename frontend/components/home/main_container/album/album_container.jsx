import { connect } from "react-redux";
import { fetchAlbums, fetchAlbum } from "../../../../actions/album_actions";
import Album from "./album";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]

  };
};

const mDTP = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: () => dispatch(fetchAlbum()),
  };
};

export default connect(mSTP, mDTP)(Album);