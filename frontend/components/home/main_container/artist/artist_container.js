import { connect } from "react-redux";
import { fetchArtist, fetchArtists } from "../../../../actions/artist_actions";
import { fetchAlbum } from "../../../../actions/album_actions";
import { fetchSong } from "../../../../actions/song_actions";
import ArtistShow from './artist_show';

const mSTP = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.artistId],
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = (dispatch) => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (artist) => dispatch(fetchArtist(artist)),
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchSong: (songId) => dispatch(fetchSong(songId))
  };
};

export default connect(mSTP, mDTP)(ArtistShow);