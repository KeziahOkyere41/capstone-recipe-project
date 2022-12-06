class ReviewsController < ApplicationController

  def create
    review = Review.create(review_params)
    render json: review, status: :created 
  end

  def index
    reviews = @current_user.reviews
    
    render json: reviews
  end
  
  def show
    review = Review.find(params[:id]) 
    render json: review, status: :ok
  end
  

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end
  
  private

  def review_params()
    params.permit(:rating, :comment, :user_id, :recipe_id)
  end
end
