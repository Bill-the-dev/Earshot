json.extract! @artist, :id, :name, :genre_id
json.albums do 
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :name, :year, :artist_id
      json.albumArtUrl url_for(album.album_art)
    end
  end
end
json.artistImgUrl url_for(@artist.artist_img)





# json.set! @artist.id do
#   json.extract! @artist, :id, :name, :genre_id
#   json.albums do 
# end
