class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :type
      t.string :breed
      t.integer :age
      t.string :gender
      t.string :description
      t.boolean :spayed_neutered
      t.boolean :house_trained
      t.boolean :declawed
      t.string :special_needs
      t.string :size
      t.string :photo
      t.string :contact_info
      t.string :contact_location

      t.timestamps
    end
  end
end
