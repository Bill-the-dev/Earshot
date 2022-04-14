# Earshot

[Earshot](https://earshot-btd.herokuapp.com/#/) is a single-page clone of Spotify. At its core, Earshot is a media library and player. Users can create a personal music library through playlists and liked songs, artists, and albums.

Production Site: https://earshot-btd.herokuapp.com/#/

### Technologies
- Ruby on Rails
- PostGreSQL
- Redux
- React
- AWS - S3 storage 
- HTML5 Media Elements

### Features
- Custom user authentication (signup, login, logout) and content protection.
- 'Home' page 
  - indexed selection of artists and albums from the user's personal library
  - indexed selection of playlists
- 'Media Player' 
  - persistent song player allows for page navigation with continuous playback
  - custom controls allow play, pause, previous, next, seek (onClick), and volume (onClick)
  - dynamic display of current song, artist, and album
- 'Artist Show' page
  - displays artist information
  - selection of artists albums link to album show page
- 'Abum Show' page
  - displays album and individual track information    
  - allows playback on song selection
- Playlist CRUD
  - users can create and delete playlists 
  - users can select songs to add or remove from their playlists

### Media Player

The media player presented a several challenges. In designing the overall application, the player required persistent and dynamic access to nearly all of the components in Earshot.  I was able to design it such that it was self-contained and updated based on the context of the main page displayed, whether it was an album, artist, etc.

### Song Component

The song component leverages rails associations to help maintain state efficiently, whether rendered in the media player, albums, playists, or search.  The component dynamically renders through passing the parent element in through props and returning based on a switch.

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










