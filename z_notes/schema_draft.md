

## Users

| **column name**   | **data type** | **detail**                    |
|-------------------|---------------|-------------------------------|
| `id`              | integer       | null: false, primary key      |
| `username`        | string        | null: false, unique, index    |
| `email`           | string        | null: false, unique, index    |
| `name`            | string        |                               |
| `dob`             | date          |                               |
| `avatar`          | text          |                               |
| `password_digest` | string        | null: false                   |
| `session_token`   | string        | null: false, unique, index    |
| `created_at`      | datetime      | null: false                   |
| `updated_at`      | datetime      | null: false                   |
|                   |               |                               |
|                   |               |                               |

  - `has_many` include: `songs_liked`, `albums_liked`, `artists_followed`, `playlists_followed`, `playlists`
  - Review: 
    - Combine `playlists_followed` and `playlists`?
    - How are media files (art and sound) stored as external refs?
    - `dob` overkill here? Explicit will not be included.


## Artist

| **column name** | **data type** | **detail**                 |
|-----------------|---------------|----------------------------|
| `id`            | integer       | null: false, primary key   |
| `name`          | string        | null: false, unique, index |
| `genre_id`      | integer       | null: false, foreign key   |
| `artist_avatar` | text          | null: false                |
|                 |               |                            |
|                 |               |                            |

  - `has_many` include: `albums`, `songs`, `user_follows`




## Songs

| **column name** | **data type** | **detail**                      |
|-----------------|---------------|---------------------------------|
| `id`            | integer       | null: false, primary key        |
| `title`         | string        | null: false, index              |
| `artist_id`     | integer       | null: false, index, foreign key |
| `album_id`      | integer       | null: false, index, foreign key |
| `created_at`    | datetime      | null: false                     |
| `updated_at`    | datetime      | null: false                     |
|                 |               |                                 |
|                 |               |                                 |
  
  - `has_many` include: `user_likes`
  - `belongs_to` include: `album`, `artist`, `playlist` 

## Albums

| **column name** | **data type** | **detail**                      |
|-----------------|---------------|---------------------------------|
| `id`            | integer       | null: false, primary key        |
| `album_name`    | string        | null: false, unique, index      |
| `artist_id`     | integer       | null: false, index, foreign key |
| `album_art`     | text          | null: false                     |
| `created_at`    | datetime      | null: false                     |
| `updated_at`    | datetime      | null: false                     |
|                 |               |                                 |
|                 |               |                                 |
- `has_many` include: `songs`, `user_likes`
- `belongs_to` include: `artist`


## Playlists

| **column name** | **data type** | **detail**                 |
|-----------------|---------------|----------------------------|
| `id`            | integer       | null: false, primary key   |
| `title`         | string        | null: false, unique, index |
| `playlist_art`  | text          | null: false                |
| `user_id`       | integer       | null: false, foreign key   |
| `genre_id`      | integer       | null: false, foreign key   |
|                 |               |                            |
|                 |               |                            |

`has_many` include: `songs`,  
`belongs_to` include: `user`, `user_follows`


## Genres

| **column name** | **data type** | **detail**                 |
|-----------------|---------------|----------------------------|
| `id`            | integer       | null: false, primary key   |
| `genre`         | string        | null: false, unique, index |
| `created_at`    | datetime      | null: false                |
| `updated_at`    | datetime      | null: false                |
|                 |               |                            |
|                 |               |                            |

`has_many` include: 
`belongs_to` include:





