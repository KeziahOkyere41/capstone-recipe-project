class RecipesController < ApplicationController
  skip_before_action :authorize, only: :index
  def create
    recipe = Recipe.create(recipe_params)
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
  
    private

    def recipe_params
        params.permit(:title, :thumbnail, :categories, :ingredients, :instructions, :number_of_people_served, :duration)
    end
end
