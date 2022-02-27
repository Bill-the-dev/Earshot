class Api::UsersController < ApplicationController
  # before_action :require_logged_in!, only: [:show, :index]

  # def index 
  #   @users = User.all 
  #   render :index 
  # end

  # def show
  #   @user = User.find(params[:id])
  #   render :show
  # end

  # def new
  #   @user = User.new
  #   render :new
  # end

  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      # debugger
      login!(@user)
      render "api/users/show"
    else
      # debugger
      # flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    self.params.require(:user).permit(:username, :password)
  end
end
