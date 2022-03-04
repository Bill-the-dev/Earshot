# Heroku reset - `heroku pg:reset DATABASE_URL`

# findorcreateby
# need a destroy all at the start?
# find ||= create update find or create by name and updates the info

# ActiveRecord::Base.transaction do
require 'open-uri'

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
  s_keep_you_hands_off_her = Song.create(
    title: 'Keep Your Hands Off Her'
    album: alb_chulahoma
  )
  s_keep_you_hands_off_her.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/01+Keep+Your+Hands+Off+Her.m4a"),
    filename: "01+Keep+Your+Hands+Off+Her.m4a"
    
  s_have_mercy_on_me = Song.create(
    title: 'Have Mercy On Me'
    album: alb_chulahoma
  )
  s_have_mercy_on_me.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/02+Have+Mercy+On+Me.m4a"),
    filename: "02+Have+Mercy+On+Me.m4a"
    
  s_work_me = Song.create(
    title: 'Work Me'
    album: alb_chulahoma
  )
  s_work_me.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/03+Work+Me.m4a"),
    filename: "03+Work+Me.m4a"
    
  s_meet_me_in_the_city = Song.create(
    title: 'Meet Me In the City'
    album: alb_chulahoma
  )
  s_meet_me_in_the_city.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/04+Meet+Me+In+the+City.m4a"),
    filename: "04+Meet+Me+In+the+City.m4a"
    
  s_nobody_but_you = Song.create(
    title: 'Nobody But You'
    album: alb_chulahoma
  )
  s_nobody_but_you.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/05+Nobody+But+You.m4a"),
    filename: "05+Nobody+But+You.m4a"
    
  s_my_mind_is_ramblin = Song.create(
    title: 'My Mind Is Ramblin'
    album: alb_chulahoma
  )
  s_my_mind_is_ramblin.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/06+My+Mind+Is+Ramblin.m4a"),
    filename: "06+My+Mind+Is+Ramblin.m4a"
    
  s_juniors_widow = Song.create(
    title: 'Junior\'s Widow'
    album: alb_chulahoma
  )
  s_juniors_widow.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/07+Junior's+Widow.m4a"),
    filename: "07+Junior's+Widow.m4a"
    
  s_juniors_instrumental = Song.create(
    title: 'Junior\'s Instrumental'
    album: alb_chulahoma
  )
  s_juniors_instrumental.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/08+Junior's+Instrumental.m4a"),
    filename: "08+Junior's+Instrumental.m4a"


