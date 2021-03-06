import { connect } from "react-redux";
import { fetchAlbums, fetchAlbum } from "../../../../actions/album_actions";
import { fetchSong } from "../../../../actions/song_actions";
import { receiveQueue, playSong, pauseSong, fetchCurrentSong, } from "../../../../actions/media_actions";
import AlbumShow from "./album_show";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  // 
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  // 
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    receiveQueue: (songs) => dispatch(receiveQueue(songs)),
    fetchCurrentSong: (song) => dispatch(fetchCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()), 
  };
};

// export default connect(mSTP, mDTP)(AlbumShow);
export default withRouter(connect(mSTP, mDTP)(AlbumShow));