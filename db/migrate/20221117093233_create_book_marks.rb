class CreateBookMarks < ActiveRecord::Migration[7.0]
  def change
    create_table :book_marks do |t|

      t.timestamps
    end
  end
end
