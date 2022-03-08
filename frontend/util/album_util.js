
export const fetchAlbums = () => {
  return $.ajax({
    url: `/api/albums`,
    method: 'GET' 
  })
}

export const fetchAlbum = (id) => {
  return $.ajax({
    url: `/api/albums/${id}`,
    method: 'GET'
  })
}