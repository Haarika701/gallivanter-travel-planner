Rails.application.routes.draw do
 
  resources :trips
  resources :favorites
  resources :things_to_dos
  resources :places,only:[:index]
  resources :trip_planners
  resources :users ,only:[:create,:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
