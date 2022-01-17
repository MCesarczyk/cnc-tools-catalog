class AddParametersToTools < ActiveRecord::Migration[6.0]
  def change
    add_column :tools, :corner_radius, :integer
    add_column :tools, :flute_number, :integer
    add_column :tools, :flute_length, :integer
    add_column :tools, :machine, :string
  end
end
