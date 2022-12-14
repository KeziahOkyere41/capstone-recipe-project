class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :user_profile]

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
    
    def user_profile
      user = User.find(params[:id])
      render json: user
    end
    def update
      user = User.find_by(id: params[:id])
       image = Cloudinary::Uploader.upload(params[:image], {
        upload_preset: "thumbnail-media",
      })
      user.update({:name => params[:name], :email => params[:email], :password => params[:password], :image => image['url'], :location => params[:location]})
      render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:name, :email, :password, :confirm_password, :location)
    end

end
