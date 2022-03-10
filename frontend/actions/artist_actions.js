import * as ArtistUtil from "../util/artist_util";

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtist = (artist) => { 
  return ({
    type: RECEIVE_ARTIST,
    artist
  });
}

const receiveArtists = (artists) => {
  return ({
    type: RECEIVE_ARTISTS,
    artists
  });
}

export const fetchArtist = (id) => dispatch => {
  return (
    ArtistUtil.fetchArtist(id)
    .then(artist => dispatch(receiveArtist(artist)))
  )
};

export const fetchArtists = () => dispatch => {
  return ( 
    ArtistUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)))
  )
};