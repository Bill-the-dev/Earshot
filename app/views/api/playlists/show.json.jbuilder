json.extract! @playlist, :id, :title, :creator_id, :creator

if @playlist.songs.empty? 
  json.set! :songs, {}
else 
  json.songs do 
    @playlist.songs.each do |song|
      json.set! song.id do 
        json.extract! song, :id, :song_title, :album_id, :artist, :album
        json.songUrl url_for(song.song_file)
        json.album do 
          json.extract song.album, :id, :name, :year
          json.albumArtUrl url_for(@album.album_art)
        end
        json.artist do 
          json.extract! song.artist, :id, :name 
        end
      end
    end
  end
end





# PLAYLIST INDEX FORMAT
# @playlists.each do |playlist|
#   json.set! playlist.id do 
#     json.extract! playlist, :id, :title, :creator
#   end

#   json.songs do 
#     # @playlist.songs.each do |song|
#     json.array! playlist.songs.each do |song|
#       json.extract! song, :id, :title, :album_id
#       json.songUrl url_for(song.song_file)
#       json.album do 
#         json.extract song.album, :id, :name, :year
#         json.albumArtUrl url_for(@album.album_art)
#       end
#       json.artist do 
#         json.extract! song.artist, :id, :name 
#       end
#     end
#   end
# end