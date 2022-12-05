class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :thumbnail, :categories, :ingredients, :procedures, :number_of_people_served, :user_id, :duration
  has_one :user
  has_many :book_mark
  has_many :reviews
  has_many :users, through: :reviews
end
