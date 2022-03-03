# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

# need a destroy all at the start?

demo_user = User.create()
User.create(
  email: "hireBill@demo.com",
  password: "password",
  username: "KindGuest"
)

# Genre
  # g_rock = Genre.create(
  #   name: 'Afrobeat',
  # )

# Artist
  # a_fela_kuti = Artsist.create(
  #   name: 'Fela Kuti',
  #   genre_id: 1
  # )
  # a_fela_kuti.artist_img.attach(
  #   io: open("https://earshot-dev.s3.amazonaws.com/dhHhDoNhPjshEssvZmFiGei1", filename: )
  # )


# Album 
  alb_zombie = Album.create(
    name: 'Zombie (USA)',
    artist_id: 1
  )
  alb_zombie.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/dhHhDoNhPjshEssvZmFiGei1", filename: )
  )

# Song
  s_zombie = Song.create(
    title: 'Zombie'
    album_id: 1
  )


