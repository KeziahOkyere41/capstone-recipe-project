class RecipesController < ApplicationController
  skip_before_action :authorize, only: :index
  def create
    image = Cloudinary::Uploader.upload(params[:thumbnail], {
        upload_preset: "thumbnail-media",
      })
    recipe = Recipe.create({:title => params[:title], :thumbnail => image['url'], :categories => params[:categories], :ingredients => params[:ingredients], :procedures => params[:procedures], :number_of_people_served => params[:number_of_people_served], :duration => params[:duration], :user_id => @current_user.id})
    render json: recipe, status: :created 
  end

  def index
    recipes = Recipe.all
    render json: recipes, include: [:user]
  end
  
  def show
    recipe = Recipe.find(params[:id]) 
    render json: recipe, status: :ok
  end
  
  def update
    recipe = Recipe.find_by(id: params[:id])
    recipe.update(recipe_params)
    render json: recipe, status: :ok
  end
  
  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end
  
    #private

    #def recipe_params
     # params.permit(:title, :thumbnail, :categories, :ingredients, :procedures, :number_of_people_served, :duration, :user_id)
    #end
end
