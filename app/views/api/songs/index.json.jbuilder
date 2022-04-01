@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :artist, :album_id
    json.songUrl url_for(song.song_file) 
  end
end