class Song < ApplicationRecord
  validates :title, :album_id, presence: true

  has_one_attached :song_file


end
