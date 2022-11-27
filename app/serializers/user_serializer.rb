class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :email, :image
  has_many :recipes
  has_many :book_marks
  has_many :recipes, through: :book_marks
end
