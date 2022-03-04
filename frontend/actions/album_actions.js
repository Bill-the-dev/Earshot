import * as AlbumUtil from '../util/album_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

// Action Creators
const receiveAlbum = (album) => {
  return ({
    type: RECEIVE_ALBUM,
    album
  })
}

const receiveAlbums = (albums) => {
  return ({
    type: RECEIVE_ALBUMS,
    albums
  })
}

// Thunks
export const fetchAlbum = id => dispatch => {
  return (
    AlbumUtil.fetchAlbum(id) 
      .then(album => dispatch(receiveAlbum(album)))
  )
}

export const fetchAlbums = () => dispatch => {
  return (
    AlbumUtil.fetchAlbums() 
      .then(albums => dispatch(receiveAlbums(albums)))
  )
}
