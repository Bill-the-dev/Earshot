json.extract! @album, :id, :name, :year, :artist_id, :songs

json.albumArtUrl url_for(@album.album_art)




# json.album do 
#   json.extract! @album, 
  
# end