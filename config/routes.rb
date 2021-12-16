Rails.application.routes.draw do
  resources :trips
  resources :favorites
  resources :things_to_dos
  resources :places
  resources :trip_planners
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
