class Api::SessionsController < ApplicationController
  # before_action :ensure_logged_in, only: [:destroy] 

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
      render "api/users/show"
    else
      # flash.now[:errors] = ['Invalid username or password']
      render json: ["Invalid credentials"], status: 401
    end
  end

  # def destroy 
  #   logout!
  #   render json: {}
  # end

  # Another option w/ error reporting, w/o before action
  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Not signed in"], status: 404
    end
  end
end
