import { connect } from "react-redux";
import { fetchAlbums, fetchAlbum } from "../../../../actions/album_actions";
import AlbumShow from "./album_show"

// const mSTP = (state) => {
//   debugger
//   return {
//     albums: state.albums

//   };
// };

const mDTP = (dispatch) => {
  debugger
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  };
};

// export default connect(mSTP, mDTP)(AlbumShow);
export default connect(null, mDTP)(AlbumShow);