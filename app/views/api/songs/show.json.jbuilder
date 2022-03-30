json.set! @song.id do
  json.extract! @song, :id, :title, :album_id
  json.songUrl url_for(@song.song_file)
  # json.song.album
end
# THIS ONE DOESN'T WORK
# this line doesn't change anything:
# debugger
json.albumArtUrl url_for(@song.album.album_art)

#I've also tried nesting it within the @song.id do block above
