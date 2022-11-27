class BookMarksController < ApplicationController
  skip_before_action :authorize, only: [:show]
  def create
    bookmark = BookMark.create(bookmark_params)
    render json: bookmark, status: :created 
  end

  def index
    bookmarks = @current_user.book_marks
    
    render json: bookmarks
  end
  
  def show
    bookmark = BookMark.find(params[:id]) 
    render json: bookmark, status: :ok
  end
  

  def destroy
    bookmark = BookMark.find(params[:id])
    bookmark.destroy
    head :no_content
  end
  
  private

  def bookmark_params()
    params.permit(:user_id, :recipe_id)
  end

end
