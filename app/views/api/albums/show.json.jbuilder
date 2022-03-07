json.album do 
  json.extract! @album, :id, :name, :year, :artist_id
  json.albumArtUrl url_for(album.album_art)
end