json.set! @artist.id do
  json.extract! @artist, :id, :name, :genre_id
  json.artistUrl url_for(@artist.artist_img)
  json.artist.albums
end
