class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :animal_id
      t.integer :user_id
      t.string :priority_sort

      t.timestamps
    end
  end
end
