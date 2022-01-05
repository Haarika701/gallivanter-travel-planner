Rails.application.routes.draw do
 
  resources :trips,only:[:create,:show,:index]
  resources :favorites,only:[:create,:index]
  resources :things_to_dos,only:[:show,:index]
  resources :places,only:[:index,:show]
  resources :trip_planners,only:[:index,:create,:show,:destroy]
  resources :users ,only:[:create,:show,:update,:destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/favoritethings',to:'favorites#show'
  get '/tripplanners',to:'trip_planners#show'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
