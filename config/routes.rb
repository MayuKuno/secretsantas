Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  root to: "home#index"

  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  resources :posts do
    collection do
      get 'search'
    end 
  end
  resources :posts
  resources :groups do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  
  resources :categories
  resources :users
  resources :messages



end




