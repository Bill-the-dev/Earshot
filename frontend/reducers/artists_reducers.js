import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';

const ArtistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return oldState;
  }
};

export default ArtistReducer;