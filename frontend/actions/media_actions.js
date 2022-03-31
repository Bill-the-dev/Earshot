
export const FETCH_CURRENT_SONG = 'FETCH_CURRENT_SONG';
export const FETCH_DURATION = 'FETCH_DURATION';
export const FETCH_CURRENT_TIME = 'FETCH_CURRENT_TIME';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PREV_SONG = 'PREV_SONG';
export const NEXT_SONG = 'NEXT_SONG';




export const fetchCurrentSong = (song) => {
  return {
    type: FETCH_CURRENT_SONG,
    song
  };
};

export const fetchDuration = () => {
  return {
    type: FETCH_DURATION
  };
};

export const fetchCurrentTime = () => {
  return {
    type: FETCH_CURRENT_TIME
  };
};

export const playSong = () => {
  return {
    type: PLAY_SONG
  };
};

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  };
};

export const prevSong = () => {
  return {
    type: PREV_SONG
  };
};

export const nextSong = () => {
  return {
    type: NEXT_SONG
  };
};

