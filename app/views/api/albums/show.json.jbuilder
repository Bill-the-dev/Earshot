json.extract! @album, :id, :name, :year, :artist_id

json.artist do
  json.extract! @album.artist, :id, :name
end

json.songs do  # sets 
  @album.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :album_id
      json.artist do
        json.extract! song.artist, :id, :name
      end
      json.songUrl url_for(song.song_file)
      json.albumArtUrl url_for(@album.album_art)
    end
  end
end
json.albumArtUrl url_for(@album.album_art)
