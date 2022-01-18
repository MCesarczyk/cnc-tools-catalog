class ChangeTypesInTools < ActiveRecord::Migration[6.0]
  def up
    change_column :tools, :diameter, :decimal
    change_column :tools, :length, :decimal
    change_column :tools, :corner_radius, :decimal
    change_column :tools, :flute_length, :decimal
  end

  def down
    change_column :tools, :diameter, :integer
    change_column :tools, :length, :integer
    change_column :tools, :corner_radius, :integer
    change_column :tools, :flute_length, :integer
  end
end
