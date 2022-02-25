Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: JSON} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end




    #  Prefix Verb   URI Pattern                   Controller#Action
      #  root GET    /                             static_pages#root
  # api_users POST   /api/users(.:format)          api/users#create {:default=>{:format=>JSON}}
# api_session DELETE /api/session(.:format)        api/sessions#destroy {:default=>{:format=>JSON}}
            # POST   /api/session(.:format)        api/sessions#create {:default=>{:format=>JSON}}