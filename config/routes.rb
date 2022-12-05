Rails.application.routes.draw do
  resources :book_marks
  resources :reviews
  resources :users
  resources :recipes
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/signup", to: "users#create"
  get "/my_book", to: "book_marks#my_bookmark"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/hello', to: 'application#hello_world'

  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
