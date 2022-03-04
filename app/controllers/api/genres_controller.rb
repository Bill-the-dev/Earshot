class Api::GenresController < ApplicationController

  def index
    @genres = Genre.all
    render :index
  end

  def show
    @genre = Genre.find(params[:id])
    render :show
  end

  # def create
  #   @genre = Genre.new(genre_params)
  #   if @genre.save
  #     render json: ['save success']
  #   else
  #     render json: @genre.errors.full_messages, status: 422
  #   end
  # end

  private

  def genre_params
    params.require(:genre).permit(:name, :genre_img)
  end
  
end
