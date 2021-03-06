class Playlist < ApplicationRecord
  validates :title, :creator_id, null: false 

  has_many :playlists_songs,
    foreign_key: :playlist_id,
    class_name: :PlaylistSong

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :songs,
    through: :playlists_songs,
    source: :song

end
