class CreateTools < ActiveRecord::Migration[6.0]
  def change
    create_table :tools do |t|
      t.string :tooltype
      t.integer :diameter
      t.integer :length
      t.integer :quantity

      t.timestamps
    end
  end
end
