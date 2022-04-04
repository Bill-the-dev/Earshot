class Api::PlaylistsController < ApplicationController

  # before_action :ensure_logged_in

  def index
    # current user only? or keep public
    @playlists = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      render '/api/playlists/show'
    else 
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def add_playlist_song
    @song = Song.find(params[:song_id])
    @playlist = Playlist.find(params[:playlist_id])
    @playlist_song = @playlist.playlist_songs.new(song_id: @song.id)
    if @playlist_song.save
      render 'api/playlists/show'
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def remove_playlist_song
    @song = Song.find(params[:song_id])
    @playlist = Playlist.find(params[:playlist_id])
    @playlist_song = @playlist.playlist_songs.find_by(song_id: @song.id)
    @playlist_song.destroy
    if @playlist.save
      render 'api/playlists/show'
    else 
      render json: @playlist.errors.full_messages, status: 422
    end
  end


  def update
    @playlist = Playlist.find(params[:id])
    @playlist.title = params[:playlist][:title]
    if @playlist.save
      render '/api/playlists/show'
    else 
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist
      render json: @playlist.id
      @playlist.destroy
    else
      render json: ['Not a valid playlist']
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end

end
