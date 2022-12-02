class Recipe < ApplicationRecord
	
	belongs_to :user
	has_many :reviews
	has_many :book_mark
	
end
