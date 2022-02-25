class Api::SessionsController < ApplicationController
  before_action :ensure_logged_in, only[:destroy] 

  # def new
  #   render :new
  # end

  def create 
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )
    
    if @user
      login!(@user)
      render :show
    else
      # flash.now[:errors] = ['Invalid username or password']
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy 
    logout!
    render json: {}
  end
end
