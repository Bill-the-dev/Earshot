Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:index, :show, :create, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      post "/addsong/:song_id", to: "playlists#add_playlist_song", as: "add_song"
      delete "/removesong/:song_id", to: "playlists#remove_playlist_song", as: "remove_song"
    end
      # add and remove playlist song? custom route 
  end
  
  root to: 'static_pages#root'
end




    #  Prefix Verb   URI Pattern                   Controller#Action
      #  root GET    /                             static_pages#root
  # api_users POST   /api/users(.:format)          api/users#create {:default=>{:format=>JSON}}
# api_session DELETE /api/session(.:format)        api/sessions#destroy {:default=>{:format=>JSON}}
            # POST   /api/session(.:format)        api/sessions#create {:default=>{:format=>JSON}}



# api_playlists GET    /api/playlists(.:format)     api/playlists#index {:format=>:json}
#               POST   /api/playlists(.:format)     api/playlists#create {:format=>:json}
# api_playlist  GET    /api/playlists/:id(.:format) api/playlists#show {:format=>:json}
#               PATCH  /api/playlists/:id(.:format) api/playlists#update {:format=>:json}
#               PUT    /api/playlists/:id(.:format) api/playlists#update {:format=>:json}
#               DELETE /api/playlists/:id(.:format) api/playlists#destroy {:format=>:json}