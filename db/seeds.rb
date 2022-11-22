# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = User.create([{"name": "Ibrahim", "email": "ibrahim@mail.com", "password": "ibrahim"}, {"name": "Keziah", "email": "keziah@email.com", "password": "keziah"}, {"name": "Prince", "email": "prince@email.com", "password": "prince"}, {"name": "Michael", "email": "michael@email.com", "password": "michael"}])

recipes = Recipe.create([{"title": "Jollof rice", "categories": "African", "number_of_people_served": 5, "thumbnail": "https://myrecipejoint.com/wp-content/uploads/2020/12/IMG_04221.jpg", "ingredients": "rice, vegetable oil, tomatoes, onions, jollof seasoning", "procedures": "1. prepare stew, 2. add two cups of water and allow to boil, 3. add two cups of rice with a little water and allow to boil for about 30 minutes", "duration": "60 mins", "user_id": 2}, {"title": "Fried yam", "categories": "African", "number_of_people_served": 3, "thumbnail": "https://res.cloudinary.com/hsxfx8igq/image/upload/t_16x9_recipe_image,f_auto/v1596399690/fried_yam_n2ve0a.jpg", "ingredients": "yam, vegetable oil, salt", "procedures": "1. allow oil to boil for 10 minutes, 2. peel yam and soak it in salty water for 5 minutes, 3. take yam out of water and carefully place it in boiling oiling. 4. continue stirring until it becomes hard", "duration": "60 mins", "user_id": 4}])


reviews = Review.create([{"comment": "This amazing plant has stablized the humidity in my office. It is easy to maintain too.", "rating": 5, "user_id": 3, "recipe_id": 2}, {"comment": "This plant has made my office lively and natural. But the leaves drop frequently.", "rating": 4, "user_id": 3, "recipe_id": 1}, {"comment": "This has really decorated my office and makes my office highly ventilated", "rating": 5, "user_id": 2, "recipe_id": 1}])

