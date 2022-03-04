# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Heroku reset - `heroku pg:reset DATABASE_URL`

require 'open-uri'

# findorcreateby
# need a destroy all at the start?
# find ||= create update find or create by name and updates the info

ActiveRecord::Base.transaction do
  Song.destroy_all
  Album.destroy_all
  Artist.destroy_all
  User.destroy_all

  demo_user = User.create()
  User.create(
    email: "hireBill@demo.com",
    password: "password",
    username: "KindGuest"
  )

  # Genre
    g_rock = Genre.create(
      name: 'Rock'
    )

    g_afrobeat = Genre.create(
      name: 'Afrobeat'
    )

  # Artist
    a_fela_kuti = Artsist.create(
      name: 'Fela Kuti',
      genre: g_afrobeat 
    )
    a_fela_kuti.artist_img.attach(
      io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_felakuti.jpeg"), 
      filename: "artist_felakuti.jpeg"
    )

    a_the_black_keys = Artist.create(
      name: 'The Black Keys'
      genre: g_rock
    )
    a_the_black_keys.artist_img.attach(
      io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_theblackkeys.jpeg"),
      filename: "artist_theblackkeys.jpeg"
    )



  # Album 
    alb_zombie = Album.create(
      name: 'Zombie (USA)',
      year: 1977,
      artist: a_fela_kuti
    )
    alb_zombie.album_art.attach(
      io: open("https://earshot-dev.s3.amazonaws.com/album-art/zombie.jpg"), 
      filename: "zombie.jpg"
    )

    alb_chulahoma = Album.create(
      name: 'Chulahoma',
      year: 2006,
      artist: a_the_black_keys
    )
    alb_chulahoma.album_art.attach(
      io: open("https://earshot-dev.s3.amazonaws.com/album-art/chulahoma.jpeg"),
      filename: "chulahoma.jpeg"
    )

  # Song
    #Zombie
    s_zombie = Song.create(
      title: 'Zombie'
      album: alb_zombie
    )
    s_zombie.song_file.attach(
      io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_zombie/01+Zombie.mp3"),
      filename: "01+Zombie.mp3"
    )

    #Chulahoma
    s_ = Song.create(
      title: 'Keep Your Hands Off Her'
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""
      
    s_ = Song.create(
      title: ''
      album: alb_chulahoma
    )
    s_.song_file.attach(
      io: open(""),
      filename: ""

      

end
