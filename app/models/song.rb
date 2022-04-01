class Song < ApplicationRecord
  validates :title, :album_id, presence: true

  has_one_attached :song_file
  # dependent destroy?

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album

  has_many :playlists,
    foreign_key: :playlist_id,
    class_name: :Playlist
    
  has_many :playlist_songs,
    foreign_key: :song_id,
    class_name: :PlaylistSong

  has_one :artist, 
    through: :album,
    source: :artist

end
