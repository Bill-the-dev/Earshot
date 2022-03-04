import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../actions/album_actions";

const AlbumsReducer = (oldState = {}, action) => {
  // debugger
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    case RECEIVE_ALBUMS:
      return action.albums;
  
    default:
      return oldState
  }
}

export default AlbumsReducer;