json.set! @song.id do
  json.extract! @song, :id, :title, :artist, :album, :album_id
  json.songUrl url_for(@song.song_file)
  # json.song.album
end
json.albumArtUrl url_for(@song.album.album_art)

json.artist do 
  json.extract! @song.artist, :id, :name
end

json.album do 
  json.extract! @song.album, :id, :name, :year
end

