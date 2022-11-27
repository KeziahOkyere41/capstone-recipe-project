class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :thumbnail, :categories, :ingredients, :procedures, :number_of_people_served, :user_id, :duration
  has_one :user
  has_many :bookmarks
  has_many :reviews
end
