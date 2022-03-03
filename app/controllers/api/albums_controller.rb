class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  # def create
  #   @album = Album.new(album_params)
  #   if @album.save
  #     render json: ['save success']
  #   else
  #     render json: @album.errors.full_messages, status: 422
  #   end
  # end

  private

  def album_params
    params.require(:album).permit(:name, :year, :artist_id, :album_art)
  end
end
