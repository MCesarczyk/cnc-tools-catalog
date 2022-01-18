class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :group
      t.string :subgroup
      t.string :article
      t.string :manufacturer
      t.string :description
      t.string :catalog
      t.integer :quantity
      t.string :annotations

      t.timestamps
    end
  end
end
