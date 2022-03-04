class Genre < ApplicationRecord
  validates :name, presence: true

  has_one_attached :genre_img
  # dependent destroy?

  has_many :artists,
    # foreign_key: :artist_id,
    # class_name: :Artist

end
