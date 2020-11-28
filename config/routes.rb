Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  root to: "home#index"
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end
  resources :tops, only: [:index] do
    collection do
      get 'faq'
      get 'service'
      get 'privacy'
    end 
  end
  resources :posts do
    collection do
      get 'search'
      get 'sns'
    end 
  end
  resources :posts
  resources :categories

  resources :users do
    member do
      get :following, :followers
    end
    collection do
      get 'search'
    end 
  end
  resources :relationships,       only: [:create, :destroy]

  resources :messages
  resources :groups do
    resources :messages, only: [:index, :create]
    collection do
      get 'anonymous'
    end 
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  get 'tags/:tag', to: 'posts#index', as: :tag

end



