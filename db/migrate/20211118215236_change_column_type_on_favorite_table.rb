class ChangeColumnTypeOnFavoriteTable < ActiveRecord::Migration[6.1]
  def up
    change_column :favorites, :priority_sort, 'integer USING CAST(priority_sort AS integer)'
  end
  def down
    change_column :favorites, :priority_sort, :string
  end
end
