# Earshot

[Earshot](https://earshot-btd.herokuapp.com/#/) is a single-page clone of Spotify. Earshot was created **_without_** the use of the Spotify API. At its core, Earshot is a media library and player. Users can create a personal music library through playlists and liked songs, artists, and albums.

Production Site: https://earshot-btd.herokuapp.com/#/

## Table of Contents
+ [Technologies](#technologies)
+ [Features](#features)
  - [User Authentication](#user-authentication)
  - [`Artist`, `Album`, and `Home`](#-artist----album---and--home-)
  - [`Search` and `Playlist`](#-search--and--playlist-)
  - [`Media Player` Component](#-media-player--component)
+ [Challenges](#challenges)
  - [`Media Player` Component](#-media-player--component-1)
  - [`Song` Component](#-song--component)
+ [Continued Development](#continued-development)

### Technologies
- Ruby on Rails
- PostGreSQL
- Redux
- React
- AWS - S3 storage 
- HTML5 Media Elements

---

### Features

#### User Authentication

![User Auth](https://raw.githubusercontent.com/Bill-the-dev/Earshot/main/app/assets/images/gifs/gifAuth.gif)

- Custom user authentication (signup, login, logout) and content protection.

---

#### `Artist`, `Album`, and `Home` 
- `Artist` show page
  - displays artist information
  - selection of artists albums link to album show page
- `Abum` show page
  - displays album and individual track information    
  - allows playback on song selection
- `Home` 
  - indexed selection of artists and albums from the user's personal library
  - indexed selection of playlists

---

#### `Search` and `Playlist` 

![Search and Playlist CRUD](https://raw.githubusercontent.com/Bill-the-dev/Earshot/main/app/assets/images/gifs/gifSearchPlaylistCRUD.gif)

- `Search` 
  - Displays live results. 
  - Component adapted for both stand-alone search and incorporated into `Playlist` CRUD.
- `Playlist` CRUD.  
  - Users can create and delete personal playlists.  
  - Users can select songs to add or remove from their personal playlists.  

---

#### `Media Player` Component

![Media Player and Song](https://raw.githubusercontent.com/Bill-the-dev/Earshot/main/app/assets/images/gifs/gifMedia.gif)

- `Media Player` 
  - persistent song player allows for page navigation with continuous playback
  - custom controls allow play, pause, previous, next, seek (onClick), and volume (onClick)
  - dynamic display of current song, artist, and album

---

### Challenges

#### `Media Player` Component

The media player presented a several challenges. All functions and design are built from scratch and it uses HTML5 audio for playback. The HTML5 audio is sourced from an AWS S3 bucket and managed using Rails ActiveStorage.

In designing the overall application, the media player requires persistent and dynamic access to nearly all of the components in Earshot.  I was able to design it such that it was self-contained and updates based on the context of the currently displayed main page component. (See `Song` Component details below)

The media player maintains its own slice of state seaprate from the main react components (home, album, artist, search, etc.).  

```JSX 
  const entitiesReducer = combineReducers({ 
    users: usersReducer,
    songs: songsReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    playlists: playlistsReducer,
    media: mediaReducer
  })
```

This allows the media player to fetch a song and relevant queue (through `Song` props), and maintain/manipulate playback independent of the main react components changing around it.

```JSX
const preloadedState = {
  currentSong: null,
  playback: false,
  queue: [],
  duration: null,
  durationShow: '0:00',
  currentTime: null,
  currentTimeShow: '0:00'
};

const MediaReducer = (oldState = preloadedState, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  const audioEl = document.getElementsByClassName("audio-element")[0];

  switch (action.type) {
    case FETCH_CURRENT_SONG:
      newState.currentSong = action.song;
      return newState;
    case FETCH_DURATION:
      if (!newState.currentSong) {
        return newState.duration = null;
      } else {
        const mins = Math.floor(audioEl.duration / 60);
        const secs = Math.floor(audioEl.duration % 60);
        const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
        newState.durationShow = `${mins}:${formatSecs}`;
        newState.duration = audioEl.duration;
        return newState;
      }
    case FETCH_CURRENT_TIME: 
      if (!newState.currentSong) {
        return newState.currentTime = null;
      } else {
        const mins = Math.floor(audioEl.currentTime / 60);
        const secs = Math.floor(audioEl.currentTime % 60);
        const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;
        newState.currentTimeShow = `${mins}:${formatSecs}`;
        newState.currentTime = audioEl.currentTime;
        return newState;
      }
    case RECEIVE_QUEUE:
      const songs = Object.values(action.songs);
      songs.forEach(song => {
        if (!newState.queue.includes(song)) {
          newState.queue.push(song);
        }
      });
      return newState
    case PLAY_SONG:
      newState.playback = true;
      return newState;
    case PAUSE_SONG:
      newState.playback = false;
      return newState;
    case NEXT_SONG:
      newState.queue.unshift(action.song);
      return newState;      
    default:
      return oldState;
  }
};
```


#### `Song` Component

The `Song` component leverages rails associations to help maintain state efficiently, whether passed to the media player, albums, playists, or search.  The component dynamically renders by passing its parent element in through props and returning based on a switch.

```JSX
  renderSwitch(props, activeSong) {

      switch (props.parentEl) {
        case 'album':
          return (
            <li> 
              //...
            </li>
          )
        case 'playlist':
          return(
            <li> 
              //...
            </li>
          )
        case 'search':
          return(
            <li> 
              //...
            </li>
          )
      // etc.
    }
  }

  render() {
    // CONSTANTS
    const { index, song, albumSongs, artist } = this.props;  
    if (!index || !song || !artist) return null;
    const liPlayPause = document.getElementById('li-play-pause');
    const audio = document.createElement('audio');
    audio.src = song.songUrl;

    // CURRENT PLAYBACK COLOR
    const activeSong = (this.props.currentSong?.id === this.props.song?.id)
      ? { color: 'var(--green)'}
      : {color: 'white'}

    // RENDER contextually based on the switch params above     
    return this.renderSwitch(this.props, activeSong)
  }
```

---

### Continued Development

- Build a more robust `likes` frontend to allow users to like albums, artists, and playlists
- Add 'right click' menus to `Song` components with contextual menus
- Expand `Search` functionality to prioritize results by type (song, album, artist, playlist)
- Additional media player functions - shuffle, loop, and show queue   








