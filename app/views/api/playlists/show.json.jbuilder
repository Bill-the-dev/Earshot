json.extract! @playlist, :id, :title, :creator, :songs



# json.extract! @playlist, :id, :title, :creator_id, :creator, :songs
# old version had :creator_id in the extract, caused props differences


# json.songs do 
#   @playlist.songs.each do |song|
       
#     json.extract! song, :id, :title, :album_id
#     json.songUrl url_for(song.song_file)
#     json.album do 
#       json.extract! song.album, :id, :name, :year
#       # json.albumArtUrl url_for(@album.album_art)
#     end
#     json.artist do 
#       json.extract! song.artist, :id, :name 
#     end
      
#   end
# end


# debugger
# if @playlist.songs
#   debugger
#   json.songs do 
#     @playlist.songs.each do |song|
       
#       json.extract! song, :id, :title, :album_id, :artist, :album
#       json.songUrl url_for(song.song_file)
#       json.album do 
#         json.extract! song.album, :id, :name, :year
#         # json.albumArtUrl url_for(@album.album_art)
#       end
#       json.artist do 
#         json.extract! song.artist, :id, :name 
#       end
      
#     end
#   end
# end

