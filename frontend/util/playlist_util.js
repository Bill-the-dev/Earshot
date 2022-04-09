export const createPlaylist = (playlist) => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'POST',
    data: {playlist}
  })
}

export const deletePlaylist = (id) => {
  return(
    $.ajax({
      url: `/api/playlists/${id}`,
      method: "DELETE"
    })
  )
}


export const fetchPlaylists = () => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'GET',
  })
}
export const fetchPlaylist = (id) => {
  return $.ajax({
    url: `/api/playlists/${id}`,
    method: 'GET'
  })
}


export const addPlaylistSong = (playlistId, songId) => {
  return $.ajax({
    url: `/api/playlists/${playlistId}/addsong/${songId}`,
    method: 'POST',
    // implied? No change whenn below included
    // data: {
    //   playlist_id: playlistId, 
    //   song_id: songId
    // }
  })
}
export const removePlaylistSong = (playlistId, songId) => {
  return $.ajax({
    url: `/api/playlists/${playlistId}/addsong/${songId}`,
    method: 'DELETE'
  })
}
// export const createPlaylist = (playlist) => {
//   return $.ajax({
//     url: ``,
//     method: '',
//     data: {}
//   })
// }