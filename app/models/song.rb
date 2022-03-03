class Song < ApplicationRecord
  validates :title, :album_id, presence: true

  has_one_attached :song_file
  # dependent destroy?

  belongs_to :album,
  # foreign_key: :album_id,
  # class_name: :Album
end
