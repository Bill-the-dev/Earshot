class AddIndexToSongs < ActiveRecord::Migration[5.2]
  def change
    add_index :songs, :album_id
  end
end
