class CreateThingsToDos < ActiveRecord::Migration[6.1]
  def change
    create_table :things_to_dos do |t|
      t.belongs_to :place, null: false, foreign_key: true
      t.string :description
      t.string :category
      t.string :expense
      t.float :rating
      t.string :image
      t.string :name
      t.timestamps
    end
  end
end
