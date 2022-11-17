class AddColumnsToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :thumbnail, :string
    add_column :recipes, :categories, :string
    add_column :recipes, :ingredients, :string
    add_column :recipes, :procedures, :string
    add_column :recipes, :number_of_people_served, :integer
    add_column :recipes, :user_id, :integer
    add_column :recipes, :date_created, :datetime
  end
end
