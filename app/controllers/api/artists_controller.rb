class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  # def create
  #   @artist = Artist.new(artist_params)
  #   if @artist.save
  #     render json: ['save success']
  #   else
  #     render json: @artist.errors.full_messages, status: 422
  #   end
  # end

  private

  def artist_params
    params.require(:artist).permit(:name, :genre_id, :artist_img)
  end
end
