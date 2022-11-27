class BookMarkSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id
  has_one :user
  has_one :recipe
  
end
