class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def index
      users = User.all
      render json: users
    end

    def show
        render json: @current_user, status: :ok
    end

    private

    def user_params
        params.permit(:name, :email, :password, :confirm_password)
    end

end
