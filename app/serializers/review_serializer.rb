class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :recipe_id, :created_at
  has_one :user
  has_one :recipe
end
