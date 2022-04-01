class PlaylistSong < ApplicationRecord

  belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: :Playlist

  belongs_to :song,
    foreign_key: :song_id,
    class_name: :Song
    
end
