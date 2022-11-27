class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :reviews
    has_many :book_marks
    validates :email, presence: true, uniqueness: true
end
