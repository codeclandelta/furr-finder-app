class ChangeColumnnameOnAnimalTable < ActiveRecord::Migration[6.1]
    def change
    rename_column :animals, :type, :species
  end
end