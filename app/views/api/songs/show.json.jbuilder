json.set! song.id do
  json.extract! song, :id, :title, :album_id
  json.songUrl url_for(song.song_file) 
end
