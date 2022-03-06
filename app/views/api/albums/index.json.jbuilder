@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :name, :year, :artist_id
    json.albumArtUrl url_for(album.album_art)
  end
end



  # json.extract! album, :id, :name, :artist_id, :song_ids
  # json.photoUrl  url_for(album.photo)