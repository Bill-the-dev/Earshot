## In no particular order:

- Add docoument title icon
  https://www.geeksforgeeks.org/how-to-add-icon-logo-in-title-bar-using-html/




### Seed File Additions:
```Ruby

# Genre
  g_rock = Genre.create(
    name: 'Rock'
  )

  g_afrobeat = Genre.create(
    name: 'Afrobeat'
  )

  g_reggae = Genre.create(
    name: 'Reggae'
  )

  g_jazz = Genre.create(
    name: 'Jazz'
  )

  g_pop = Genre.create(
    name: 'Pop'
  )

  g_rnb = Genre.create(
    name: 'R&B'
  )

  g_indie = Genre.create(
    name: 'Indie'
  )

# Artist
  a_fela_kuti = Artist.create(
    name: 'Fela Kuti',
    genre: g_afrobeat 
  )
  a_fela_kuti.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_felakuti.jpeg"), 
    filename: "artist_felakuti.jpeg"
  )

  a_the_black_keys = Artist.create(
    name: 'The Black Keys',
    genre: g_rock
  )
  a_the_black_keys.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_theblackkeys.jpeg"),
    filename: "artist_theblackkeys.jpeg"
  )

  a_bob_marley = Artist.create(
    name: 'Bob Marley',
    genre: g_reggae
  )
  a_bob_marley.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_bob_marley.jpeg"),
    filename: "artist_bob_marley.jpeg"
  )

  a_alabama_shakes = Artist.create(
    name: 'Alabama Shakes',
    genre: g_rock
  )
  a_alabama_shakes.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_alabamashakes.jpeg"),
    filename: "artist_alabamashakes.jpeg"
  )

  a_ella_fitzgerald = Artist.create(
    name: 'Ella Fitzgerald',
    genre: g_jazz
  )
  a_ella_fitzgerald.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_ellaandlouis.jpg"),
    filename: "artist_ellaandlouis.jpg"
  )

  a_glass_animals = Artist.create(
    name: 'Glass Animals',
    genre: g_pop
  )
  a_glass_animals.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_glassanimals.jpg"),
    filename: "artist_glassanimals.jpg"
  )

  a_khalid = Artist.create(
    name: 'Khalid',
    genre: g_rnb
  )
  a_khalid.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_khalid.jpeg"),
    filename: "artist_khalid.jpeg"
  )

  a_the_rolling_stones = Artist.create(
    name: 'The Rolling Stones',
    genre: g_rock
  )
  a_the_rolling_stones.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_therollingstones.jpeg"),
    filename: "artist_therollingstones.jpeg"
  )

  a_vampire_weekend = Artist.create(
    name: 'Vampire Weekend',
    genre: g_indie
  )
  a_vampire_weekend.artist_img.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/artist-img/artist_vampireweekend.jpeg"),
    filename: "artist_vampireweekend.jpeg"
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

  alb_the_greatest_hits = Album.create(
    name: 'The Greatest Hits',
    year: 2007,
    artist: a_bob_marley
  )
  alb_the_greatest_hits.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/bob_marley_cover.jpeg"),
    filename: "bob_marley_cover.jpeg"
  )

  alb_sound_and_color = Album.create(
    name: 'Sound & Color',
    year: 2015,
    artist: a_alabama_shakes
  )
  alb_sound_and_color.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/sound_and_color.jpg"),
    filename: "sound_and_color.jpg"
  )

  alb_ella_and_louis_again = Album.create(
    name: 'Ella and Louis Again',
    year: 2019,
    artist: a_ella_fitzgerald
  )
  alb_ella_and_louis_again.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/artist_ellaandlouis.jpg"),
    filename: "artist_ellaandlouis.jpg"
  )

  alb_dreamland = Album.create(
    name: 'Dreamland',
    year: 2020,
    artist: a_glass_animals
  )
  alb_dreamland.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/dreamland.jpg"),
    filename: "dreamland.jpg"
  )

  alb_american_teen = Album.create(
    name: 'American Teen',
    year: 2017,
    artist: a_khalid
  )
  alb_american_teen.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/alb_american_teen.jpeg"),
    filename: "alb_american_teen.jpeg"
  )

  alb_free_spirit = Album.create(
    name: 'Free Spirit',
    year: 2019,
    artist: a_khalid
  )
  alb_free_spirit.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/alb_free_spirit.jpeg"),
    filename: "alb_free_spirit.jpeg"
  )

  alb_brothers = Album.create(
    name: 'Brothers',
    year: 2010,
    artist: a_the_black_keys
  )
  alb_brothers.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/alb_brothers.jpeg"),
    filename: "alb_brothers.jpeg"
  )

  alb_essentials = Album.create(
    name: 'Essentials',
    year: 2021,
    artist: a_the_rolling_stones
  )
  alb_alb_essentials.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/alb_essentials.jpg"),
    filename: "alb_essentials.jpg"
  )

  alb_father_of_the_bride = Album.create(
    name: 'Father of the Bride',
    year: 2019,
    artist: a_vampire_weekend
  )
  alb_father_of_the_bride.album_art.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/album-art/father_of_the_bride.jpeg"),
    filename: "father_of_the_bride.jpeg"
  )

# Song


  #Zombie
  s_zombie = Song.create(
    title: 'Zombie',
    album: alb_zombie
  )
  s_zombie.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_zombie/01+Zombie.mp3"),
    filename: "01+Zombie.mp3"
  )

  #Chulahoma
  s_keep_you_hands_off_her = Song.create(
    title: 'Keep Your Hands Off Her',
    album: alb_chulahoma
  )
  s_keep_you_hands_off_her.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/01+Keep+Your+Hands+Off+Her.m4a"),
    filename: "01+Keep+Your+Hands+Off+Her.m4a"
  )

  s_have_mercy_on_me = Song.create(
    title: 'Have Mercy On Me',
    album: alb_chulahoma
  )
  s_have_mercy_on_me.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/02+Have+Mercy+On+Me.m4a"),
    filename: "02+Have+Mercy+On+Me.m4a"
  )

  s_work_me = Song.create(
    title: 'Work Me',
    album: alb_chulahoma
  )
  s_work_me.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/03+Work+Me.m4a"),
    filename: "03+Work+Me.m4a"
  ) 

  s_meet_me_in_the_city = Song.create(
    title: 'Meet Me In the City',
    album: alb_chulahoma
  )
  s_meet_me_in_the_city.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/04+Meet+Me+In+the+City.m4a"),
    filename: "04+Meet+Me+In+the+City.m4a"
  ) 

  s_nobody_but_you = Song.create(
    title: 'Nobody But You',
    album: alb_chulahoma
  )
  s_nobody_but_you.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/05+Nobody+But+You.m4a"),
    filename: "05+Nobody+But+You.m4a"
  )

  s_my_mind_is_ramblin = Song.create(
    title: 'My Mind Is Ramblin',
    album: alb_chulahoma
  )
  s_my_mind_is_ramblin.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/06+My+Mind+Is+Ramblin.m4a"),
    filename: "06+My+Mind+Is+Ramblin.m4a"
  )

  s_juniors_widow = Song.create(
    title: 'Junior\'s Widow',
    album: alb_chulahoma
  )
  s_juniors_widow.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/07+Junior's+Widow.m4a"),
    filename: "07+Junior's+Widow.m4a"
  )

  s_juniors_instrumental = Song.create(
    title: 'Junior\'s Instrumental',
    album: alb_chulahoma
  )
  s_juniors_instrumental.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_chulahoma/08+Junior's+Instrumental.m4a"),
    filename: "08+Junior's+Instrumental.m4a"
  )

  s_sound_and_color = Song.create(
    title: 'Sound & Color',
    album: alb_sound_and_color
  )
  s_sound_and_color.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/sound_and_color/01+Sound+%26+Color.mp3"),
    filename: "01+Sound+%26+Color.mp3"
  )

  s_these_foolish_things = Song.create(
    title: 'These Foolish Things',
    album: alb_ella_and_louis_again
  )
  s_these_foolish_things.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_ella_and_louis/2+-++These+Foolish+Things+(Remind+Me+Of+You).mp3"),
    filename: "2+-++These+Foolish+Things+(Remind+Me+Of+You).mp3"
  )

  s_heat_waves = Song.create(
    title: 'Heat Waves',
    album: alb_alb_dreamland
  )
  s_heat_waves.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_dreamland/14.+Heat+Waves.mp3"),
    filename: "14.+Heat+Waves.mp3"
  )

  s_location = Song.create(
    title: 'American Teen',
    album: alb_american_teen
  )
  s_location.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_american_teen/03.+Location.mp3"),
    filename: "03.+Location.mp3"
  )

  s_talk = Song.create(
    title: 'Talk',
    album: alb_free_spirit
  )
  s_talk.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_free_spirit/05.+Talk.mp3"),
    filename: "05.+Talk.mp3"
  )

  s_sinister_kid = Song.create(
    title: 'Sinister Kid',
    album: alb_brothers
  )
  s_sinister_kid.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_brothers/10+Sinister+Kid.m4a"),
    filename: "10+Sinister+Kid.m4a"
  )

  s_gimme_shelter = Song.create(
    title: 'Gimme Shelter',
    album: alb_essentials
  )
  s_gimme_shelter.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_essentials/02.+Gimme+Shelter+(Remastered+2019).mp3"),
    filename: "02.+Gimme+Shelter+(Remastered+2019).mp3"
  )

  s_harmony_hall = Song.create(
    title: 'Harmony Hall',
    album: alb_father_of_the_bride
  )
  s_harmony_hall.song_file.attach(
    io: open("https://earshot-dev.s3.amazonaws.com/songs/alb_father_of_the_bride/02.+Harmony+Hall.mp3"),
    filename: "02.+Harmony+Hall.mp3"
  )




```