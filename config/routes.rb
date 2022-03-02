Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:index, :show, :create, :destroy]
  end
  
  root to: 'static_pages#root'
end




    #  Prefix Verb   URI Pattern                   Controller#Action
      #  root GET    /                             static_pages#root
  # api_users POST   /api/users(.:format)          api/users#create {:default=>{:format=>JSON}}
# api_session DELETE /api/session(.:format)        api/sessions#destroy {:default=>{:format=>JSON}}
            # POST   /api/session(.:format)        api/sessions#create {:default=>{:format=>JSON}}