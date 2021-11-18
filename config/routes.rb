Rails.application.routes.draw do
  resources :favorites
  resources :animals
  # resources :animals
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
