Rails.application.routes.draw do
  root to: 'static_pages#root'

  # namespace :api, default: {format: JSON} do 
  #   # resources :users, only: [:create]
  #   # resource :session, only: [:create, :destroy]
  # end
end
