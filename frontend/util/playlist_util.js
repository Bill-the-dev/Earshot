export const createPlaylist = (playlist) => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'POST',
    data: { playlist }
  });
};

export const deletePlaylist = (id) => {
  return (
    $.ajax({
      url: `/api/playlists/${id}`,
      method: "DELETE"
    })
  );
};

export const editPlaylist = (playlist) => {
  return (
    $.ajax({
      url: `/api/playlists/${playlist.id}`,
      method: "PATCH",
      data: { playlist }
    })
  );
};


export const fetchPlaylists = () => {
  return $.ajax({
    url: `/api/playlists`,
    method: 'GET',
  });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    url: `/api/playlists/${id}`,
    method: 'GET'
  });
};


export const addPlaylistSong = (playlistId, songId) => {
  return $.ajax({
    url: `/api/playlists/${playlistId}/addsong/${songId}`,
    method: 'POST'
  });
};

export const removePlaylistSong = (playlistId, songId) => {
  return $.ajax({
    url: `/api/playlists/${playlistId}/removesong/${songId}`,
    method: 'DELETE'
  });
};
