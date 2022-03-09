
export const FETCH_CURRENT_SONG = 'FETCH_CURRENT_SONG';
export const PLAY_SONG = 'PLAY_SONG'
export const PAUSE_SONG = 'PAUSE_SONG'



export const fetchCurrentSong = (song) => {
  return {
    type: FETCH_CURRENT_SONG,
    song
  }
}

export const playSong = () => {
  return {
    type: PLAY_SONG
  } 
}

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  }
}

