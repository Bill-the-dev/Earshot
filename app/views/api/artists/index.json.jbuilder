@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :genre_id
    json.artistImgUrl url_for(artist.artist_img)
  end
end