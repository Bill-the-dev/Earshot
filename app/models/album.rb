class Album < ApplicationRecord
  validates :name, :artist_id, presence: true

  has_one_attached :album_art
    # dependent destroy?

  has_many :songs,
    # foreign_key: :album_id,
    # class_name: :Song

  belongs_to :artist,
    # foreign_key: :artist_id,
    # class_name: :Artist

end
