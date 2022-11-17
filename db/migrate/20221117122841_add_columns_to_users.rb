class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string
    add_column :users, :location, :string
    add_column :users, :email, :string
    add_column :users, :image, :string
    add_column :users, :book_marked, :string
  end
end
