class RemoveQuantityFromTools < ActiveRecord::Migration[6.0]
  def change
    remove_column :tools, :quantity
  end
end
