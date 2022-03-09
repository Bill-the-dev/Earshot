json.extract! @album, :id, :name, :year, :artist_id
json.songs do  # sets 
  @album.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :album_id
      json.songUrl url_for(song.song_file)
    end
  end
end
json.albumArtUrl url_for(@album.album_art)
