import * as SongUtil from '../util/song_util'

export const RECEIVE_SONG = 'RECEIVE_SONG' 
export const RECEIVE_SONGS = 'RECEIVE_SONGS'


// Action Creators
export const receiveSong = (song) => {
  return ({
    type: RECEIVE_SONG,
    song
  })
}

export const receiveSongs = (songs) => {
  return (
    {
      type: RECEIVE_SONGS,
      songs
    }
  ) 
}

// Thunks
export const fetchSong = id => dispatch => {
  debugger
  return (
    SongUtil.fetchSong(id)
      .then(song => dispatch(receiveSong(song)))
  )
}

export const fetchSongs = () => dispatch => {
  return (
    SongUtil.fetchSongs()
      .then(songs => dispatch(receiveSongs(songs)))
  )
}