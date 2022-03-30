json.set! @song.id do
  json.extract! @song, :id, :title, :album_id
  json.songUrl url_for(@song.song_file)
  # json.song.album
end
json.albumArtUrl url_for(@song.album.album_art)

