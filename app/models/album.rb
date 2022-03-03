class Album < ApplicationRecord
  validates :name, :artist_id, presence: true

  has_one_attached :album_art
  #dependent destroy?


  has_many :songs,
  # foreign_key: :album_id,
  # class_name: :Song
end
