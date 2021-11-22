class ChangeColumnnameAddColumnsToAnimalTable < ActiveRecord::Migration[6.1]
  def change
    add_column :animals, :api_id, :integer
    add_column :animals, :published_at, :datetime
    add_column :animals, :status_changed_at, :datetime
    add_column :animals, :status, :string
    add_column :animals, :url, :string
    remove_column :animals, :special_needs
    change_column :animals, :age, :string
    add_column :animals, :special_needs, :boolean
  end
end