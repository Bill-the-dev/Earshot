export const fetchArtist = (id) => {
  // 
  return $.ajax({
    url: `/api/artists/${id}`,
    method: 'GET'
  });
};

export const fetchArtists = () => {
  return $.ajax({
    url: `/api/artists/`,
    method: 'GET'
  });
};
