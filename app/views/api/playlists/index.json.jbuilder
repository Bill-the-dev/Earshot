@playlists.each do |playlist|
  json.set! playlist.id do 
    json.extract! playlist, :id, :title, :creator, :songs
    # debugger

    # if json.songs
    #   json.songs do 
    #     debugger
    #     playlist.songs.each do |song|
    #       json.set! song.id do
    #         json.extract! song, :id, :title, :album_id, :album, :artist
    #         json.songUrl url_for(song.song_file)
    #         json.album do 
    #           json.extract! song.album, :id, :name, :year
    #         end
    #         json.artist do 
    #           json.extract! song.artist, :id, :name 
    #         end
    #       end
    #     end
    #   end
    # else 
    #   debugger
    #   console.log('!!!!')
    # end
  end

end