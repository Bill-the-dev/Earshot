class Artist < ApplicationRecord
  validates :name, :genre_id, null: false

  has_one_attached :artist_img
  # depedent destroy?
  
  has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album

  belongs_to :genre,
    foreign_key: :genre_id,
    class_name: :Genre
end
