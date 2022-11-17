class CreateBookMarks < ActiveRecord::Migration[7.0]
  def change
    create_table :book_marks do |t|
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
