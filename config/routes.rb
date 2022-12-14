Rails.application.routes.draw do
  resources :book_marks
  resources :reviews
  resources :users, only: [:create, :index, :show, :update]
  resources :recipes
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/users:id', to: 'users#user_profile'
  post "/signup", to: "users#create"
  get "/my_book", to: "book_marks#my_bookmark"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
