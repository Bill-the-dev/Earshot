class Api::SongsController < ApplicationController
  def index
    debugger
    @songs = Song.all
    render :index
  end

  def show
    debugger
    @song = Song.find(params[:id])
    render :show
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render json: ['save success']
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :album_id, :song_file, :album_Art)
  end
  

end
