@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :artist, :album, :album_id
    json.songUrl url_for(song.song_file) 
    json.albumArtUrl url_for(song.album.album_art)
  end
end